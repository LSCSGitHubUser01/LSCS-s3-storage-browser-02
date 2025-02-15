import { Theme } from "@aws-amplify/ui-react";

export const storageBrowserTheme: Theme = {
  name: "storage-browser",
  tokens: {
    components: {
      button: {
        backgroundColor: { value: "#007bff" }, // Blue button color
        color: { value: "white" },
        borderRadius: { value: "8px" },
        padding: { value: "10px 16px" }
      },
      breadcrumb: {
        color: { value: "#333" },
        fontWeight: { value: "bold" }
      },
      paging: {
        backgroundColor: { value: "#f8f9fa" },
        color: { value: "#007bff" }
      }
    }
  }
};
