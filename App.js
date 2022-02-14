import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder="text" icon={"email"} />
    </Screen>
  );
}
