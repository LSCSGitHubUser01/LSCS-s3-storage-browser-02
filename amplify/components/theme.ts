import { Theme } from "@aws-amplify/ui-react";

export const storageBrowserTheme: Theme = {
  name: "storage-browser",
  tokens: {
    components: {
      button: {
        backgroundColor: { value: "#007bff" },
        color: { value: "white" },
        borderRadius: { value: "8px" }
        //,
        //paddingHorizontal: { value: "16px" }, // ✅ Correct property
        //paddingVertical: { value: "10px" }   // ✅ Correct property
      }
    }
  }
};
