import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* 页面标题区 */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">我们的服务</h1>
            <p className="text-lg md:text-xl opacity-90">
              MCPServer.digital提供全面的Minecraft服务器托管解决方案，从基础的游戏服务器到定制开发，满足您的所有需求。
            </p>
          </div>
        </div>
      </section>

      {/* 主要服务区 */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="heading-2 mb-6">Minecraft服务器托管</h2>
              <p className="text-gray-600 mb-6">
                我们提供高性能、稳定可靠的Minecraft服务器托管服务。采用最新的硬件设备和优化的网络架构，确保您的游戏运行流畅，无卡顿。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>高性能SSD存储，提供极速读写速度</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>高内存配置，确保游戏流畅运行</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>99.9%的服务器正常运行时间</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>全球CDN加速，无论您在哪里，都能享受低延迟的游戏体验</span>
                </li>
              </ul>
              <Link href="/pricing" className="btn btn-primary">
                查看价格方案
              </Link>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center mb-6">
                  <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">控制面板预览</h3>
                </div>
                <div className="bg-gray-900 rounded-md p-4 text-green-400 font-mono text-sm mb-4">
                  <p>$ 服务器状态: 运行中</p>
                  <p>$ CPU使用率: 32%</p>
                  <p>$ 内存使用: 4.2GB / 6GB</p>
                  <p>$ 在线玩家: 12/30</p>
                  <p>$ 最近备份: 2小时前</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button className="btn bg-green-600 text-white hover:bg-green-700 text-sm py-1">启动服务器</button>
                  <button className="btn bg-red-600 text-white hover:bg-red-700 text-sm py-1">停止服务器</button>
                  <button className="btn bg-blue-600 text-white hover:bg-blue-700 text-sm py-1">备份世界</button>
                  <button className="btn bg-yellow-600 text-white hover:bg-yellow-700 text-sm py-1">重启服务器</button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 bg-gray-100 p-8 rounded-lg shadow-inner">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center mb-6">
                  <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">模组管理界面</h3>
                </div>
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span>OptiFine</span>
                    </div>
                    <div className="text-sm text-gray-500">已安装</div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span>WorldEdit</span>
                    </div>
                    <div className="text-sm text-gray-500">已安装</div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                      <span>Biomes O' Plenty</span>
                    </div>
                    <div className="text-sm text-blue-600">安装</div>
                  </div>
                </div>
                <button className="btn btn-primary w-full">浏览更多模组</button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="heading-2 mb-6">模组和插件管理</h2>
              <p className="text-gray-600 mb-6">
                我们提供简单易用的模组和插件管理系统，让您可以轻松地为您的Minecraft服务器安装和管理各种模组和插件，丰富您的游戏体验。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>一键安装流行的Minecraft模组和插件</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>自动更新模组和插件到最新版本</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>兼容性检查，确保所有模组和插件正常工作</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>支持上传自定义模组和插件</span>
                </li>
              </ul>
              <Link href="/pricing" className="btn btn-primary">
                查看支持的模组
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">自动备份和恢复</h2>
              <p className="text-gray-600 mb-6">
                我们的自动备份系统定期备份您的服务器数据，确保在意外情况下可以快速恢复，让您不用担心数据丢失。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>每日自动备份，数据安全有保障</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>一键恢复到以往的备份点</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>手动创建备份点，方便在重要更新前保存数据</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>备份数据存储在多个地理位置，确保数据安全</span>
                </li>
              </ul>
              <Link href="/pricing" className="btn btn-primary">
                了解备份方案
              </Link>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center mb-6">
                  <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">备份管理界面</h3>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
                    <div>
                      <div className="font-medium">2023-04-15 08:30</div>
                      <div className="text-sm text-gray-500">自动备份</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 text-sm">恢复</button>
                      <button className="text-gray-600 text-sm">下载</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
                    <div>
                      <div className="font-medium">2023-04-14 08:30</div>
                      <div className="text-sm text-gray-500">自动备份</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 text-sm">恢复</button>
                      <button className="text-gray-600 text-sm">下载</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-md border border-blue-200">
                    <div>
                      <div className="font-medium">2023-04-13 15:45</div>
                      <div className="text-sm text-gray-500">手动备份</div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 text-sm">恢复</button>
                      <button className="text-gray-600 text-sm">下载</button>
                    </div>
                  </div>
                </div>
                <button className="btn bg-blue-600 text-white hover:bg-blue-700 w-full">创建手动备份</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 更多服务 */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">更多服务</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              除了基础的Minecraft服务器托管服务，我们还提供以下专业服务，满足您的特殊需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">定制开发</h3>
              <p className="text-gray-600 mb-4">
                每个Minecraft服务器都是独特的，我们提供专业的定制开发服务，根据您的需求打造属于您的独特Minecraft体验。我们的开发团队经验丰富，可以为您开发各种功能和插件。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>自定义插件开发，满足您的特殊需求</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>定制地图和世界生成</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>自定义游戏玩法和规则</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>与外部系统集成，如网站、论坛等</span>
                </li>
              </ul>
              <p className="text-gray-600">
                无论您需要什么样的自定义功能，我们都能为您实现。联系我们讨论您的想法，我们&apos;ll为您提供专业的建议和解决方案。
              </p>
            </div>
            
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">地图制作</h3>
              <p className="text-gray-600 mb-4">
                我们的专业团队可以为您打造独特的Minecraft地图，包括生存地图、冒险地图、小游戏地图等。
              </p>
              <Link href="/contact" className="text-blue-600 font-medium hover:text-blue-800">
                查看我们的作品 &rarr;
              </Link>
            </div>
            
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">技术咨询</h3>
              <p className="text-gray-600 mb-4">
                我们的专业技术团队可以为您提供Minecraft服务器相关的技术咨询服务，帮助您解决各种技术问题。
              </p>
              <Link href="/contact" className="text-blue-600 font-medium hover:text-blue-800">
                预约咨询 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">准备开始使用我们的服务了吗？</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            从今天开始，让您的Minecraft服务器体验更上一层楼。注册即可获得7天免费试用！
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register" className="btn bg-white text-blue-600 hover:bg-gray-100">
              立即注册
            </Link>
            <Link href="/contact" className="btn bg-transparent border border-white text-white hover:bg-white/10">
              联系销售
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 