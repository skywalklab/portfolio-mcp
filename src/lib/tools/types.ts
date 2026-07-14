export interface ToolOutput {
  [key: string]: unknown;
  content: [
    {
      type: "text";
      text: string;
    }
  ];
}
