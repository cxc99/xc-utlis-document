import { useState, useRef } from "react";
import { Avatar } from "antd";
import gjb from "@/assets/img/gjb.webp";

function Home() {
  const text = `import { assistUtils } from "xc-utlis"`;
  return (
    <div className="text-18px">
      <h1 className="text-[#314659] text-25px font-700 flex  items-center">
        XC-UTLIS-工具包
        <Avatar className="ml-10px" src={gjb}></Avatar>
        <span className="pl-5px">versions0.0.3</span>
      </h1>

      <p className="py-20px">
        xc-utlis 是 JavaScript
        的方法库---------------主要用于部分摸鱼程序员偷懒使用的js包
      </p>
      <h2 id="✨-特性" data-scrollama-index="0" className="py-5px">
        <span>✨ 特性</span>
        <a href="#✨-特性" className="anchor">
          #
        </a>
      </h2>
      <ul>
        <li className="py-5px">
          <p>🌈 提炼通用级别的方法</p>
        </li>
        <li className="py-5px">
          <p>📦 开箱即用的javascript 库。</p>
        </li>
        <li className="py-5px">
          <p>🛡 使用 TypeScript 开发</p>
        </li>
        <li className="py-5px">
          <p>⚙️ 全链路开发和设计工具体系。</p>
        </li>
        <li className="py-5px">
          <p>🌍 China is number one。</p>
        </li>
        <li className="py-5px">
          <p>🎨 偷懒至上。</p>
        </li>
      </ul>

      <h2 id="安装" data-scrollama-index="3" className="py-20px">
        <span>安装</span>
        <a href="#安装">#</a>
      </h2>
      <h3 id="使用-npm-或-yarn-安装" className="py-20px">
        <span>使用 npm 或 yarn 安装</span>
        <a href="#使用-npm-或-yarn-安装">#</a>
      </h3>
      <p>
        <strong>推荐使用 npm 或 yarn 的方式进行开发</strong>
        ，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。
      </p>
      <pre className="language-bash">
        <code>
          $ <span className="token function">npm</span>{" "}
          <span className="token function">install</span> xc-utlis --save
        </code>
      </pre>
      <pre className="language-bash">
        <code>$ yarn add xc-utlis</code>
      </pre>

      <h2 id="示例" data-scrollama-index="4" className="py-20px">
        <span>示例</span>
        <a href="#示例" className="anchor">
          #
        </a>
        <pre className="language-jsx">
          <code>
            <div>深拷贝</div>
            {text}
            {/** * 深拷贝 * 返回的结果是源类型 * @param {obj} any 类型源 *
            @return {String} 类型名称 */}
            <div>assistUtils.deepCopy(data)</div>
          </code>
        </pre>
      </h2>
    </div>
  );
}

export default Home;
