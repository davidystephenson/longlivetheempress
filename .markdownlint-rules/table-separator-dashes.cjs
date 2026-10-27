"use strict";

/**
 * Require GFM table delimiter cells to use exactly three hyphens.
 * Alignment colons are allowed: ---, :---, ---:, :---:
 */

const FENCE_OPEN = /^(`{3,}|~{3,})(.*)$/;

function isDelimiterRow(line) {
  const trimmed = line.trim();
  if (!trimmed || !trimmed.includes("-")) return false;

  const cells = trimmed.replace(/^\|/, "").replace(/\|$/, "").split("|");

  if (cells.length === 0) return false;

  let sawDelimiterCell = false;
  for (const cell of cells) {
    const content = cell.trim();
    if (content === "") continue;
    if (!/^:?-{3,}:?$/.test(content)) return false;
    sawDelimiterCell = true;
  }
  return sawDelimiterCell;
}

function reportDelimiterCells(line, lineNumber, onError) {
  const cellPattern = /:?-{3,}:?/g;
  let match = cellPattern.exec(line);

  while (match) {
    const token = match[0];
    const dashCount = (token.match(/-/g) || []).length;

    if (dashCount !== 3) {
      const left = token[0] === ":" ? ":" : "";
      const right = token[token.length - 1] === ":" ? ":" : "";
      const replacement = `${left}---${right}`;
      const editColumn = match.index + 1;

      onError({
        lineNumber,
        detail: `Table separator cell must use exactly three hyphens (found ${dashCount})`,
        context: line.trim(),
        range: [editColumn, token.length],
        fixInfo: {
          editColumn,
          deleteCount: token.length,
          insertText: replacement,
        },
      });
    }

    match = cellPattern.exec(line);
  }
}

module.exports = [
  {
    names: ["T001", "table-separator-three-dashes"],
    description: "Table separator cells must use exactly three hyphens",
    tags: ["table"],
    parser: "none",
    function: function tableSeparatorThreeDashes(params, onError) {
      let inFence = false;
      let fenceChar = null;
      let fenceLen = 0;

      params.lines.forEach((line, index) => {
        const trimmed = line.trim();
        const fence = trimmed.match(FENCE_OPEN);
        if (fence) {
          const marker = fence[1];
          if (!inFence) {
            inFence = true;
            fenceChar = marker[0];
            fenceLen = marker.length;
          } else if (
            marker[0] === fenceChar &&
            marker.length >= fenceLen &&
            fence[2].trim() === ""
          ) {
            inFence = false;
            fenceChar = null;
            fenceLen = 0;
          }
          return;
        }

        if (inFence) return;
        if (!isDelimiterRow(line)) return;

        reportDelimiterCells(line, index + 1, onError);
      });
    },
  },
];
