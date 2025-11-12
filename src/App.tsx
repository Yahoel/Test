import z from "zod";
import "./App.css";
import { Text, View } from "./components";

/**
  
  ## 基础技术要求
  ### TypeScript基础要求：在项目中，我们要用 zod 这个库来处理 TypeScript 相关的逻辑，同时使用 React 的 Hooks 来控制按钮的开关状态。
  ### 描述：这样做的目的是让我们的代码编写方式更贴近项目实际要求。
  ## 组件创建要求
  ### 标签要求：所有自定义的组件，组件名称的第一个字母都要大写，并且需要重新创建这些组件。
  ### 描述：这样做的目的是让代码编写风格更接近 React Native（简称 RN）的代码规范。
  ## 文本渲染要求
  ### 文本渲染要求：页面上显示的所有文本内容，都要用 Text 标签包裹起来。
  ### 描述：这样做的目的是让文本的渲染方式更符合 React Native 的代码编写习惯。
  
  > 对现有组件，您可以随意修改，但是要确保修改后的组件符合上述规则

  > 完成后请于 src/example-video.mp4 示例视频 核对最终效果

 */

export const SwitchStatus = {
  OPEN: "open",
  CLOSE: "close",
} as const;

export default function App() {
  return (
    <View className="phone-container">
      <View className="phone-content"></View>
    </View>
  );
}
