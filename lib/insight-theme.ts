export function getInsightTheme(category: string) {
  switch (category) {
    case "Positioning":
      return {
        primary: "#c6a56b",
        secondary: "#7f9188",
        surface: "#1c1713",
        highlight: "#f2e7d2",
      };
    case "Strategy":
      return {
        primary: "#8f9db0",
        secondary: "#c6a56b",
        surface: "#15181c",
        highlight: "#ebeff4",
      };
    case "Decision Guide":
      return {
        primary: "#d1ad76",
        secondary: "#8a8578",
        surface: "#1d1814",
        highlight: "#f4eadc",
      };
    case "Messaging":
      return {
        primary: "#b78b6f",
        secondary: "#9fa8a0",
        surface: "#1b1715",
        highlight: "#f0e4dc",
      };
    case "Product":
      return {
        primary: "#7da0b6",
        secondary: "#c6a56b",
        surface: "#12181c",
        highlight: "#e9f0f4",
      };
    case "Campaigns":
      return {
        primary: "#c38c56",
        secondary: "#85725e",
        surface: "#1e1612",
        highlight: "#f4e8de",
      };
    default:
      return {
        primary: "#c6a56b",
        secondary: "#8e9a82",
        surface: "#1b1b18",
        highlight: "#f3f0e8",
      };
  }
}
