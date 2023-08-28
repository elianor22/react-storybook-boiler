import Card from "@themeComponents/Card"

export default {
  title: "Theme/Card",
  component: Card,
  tags: ["autodocs"],
}
export const Primary = {
  args: {
    children: "My Card",
    title: "My Card Title",
    action: true,
    onclick: console.log,
    sx: {},
  },
}
