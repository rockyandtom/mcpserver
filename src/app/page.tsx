import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 英雄区域 */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="heading-1">
                高性能的Minecraft服务器托管
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                MCPServer.digital为您提供稳定、流畅、安全的Minecraft服务器托管解决方案，让您专注于游戏体验。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/pricing" className="btn bg-white text-blue-600 hover:bg-gray-100">
                  查看价格方案
                </Link>
                <Link href="/contact" className="btn bg-blue-800 text-white hover:bg-blue-900">
                  联系我们
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative h-80">
              <div className="absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm p-4">
                <div className="bg-gray-900/90 rounded-md h-full w-full p-4 text-green-400 font-mono text-sm overflow-hidden">
                  <p>$ 欢迎来到MCPServer.digital控制台</p>
                  <p>$ 正在启动Minecraft服务器...</p>
                  <p>$ 加载世界数据中...</p>
                  <p>$ 服务器启动成功!</p>
                  <p>$ 玩家可以加入游戏了</p>
                  <p className="animate-pulse">$_</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <p className="text-4xl font-bold text-blue-600">99.9%</p>
              <p className="text-gray-600">运行时间</p>
            </div>
            <div className="text-center p-4">
              <p className="text-4xl font-bold text-blue-600">5000+</p>
              <p className="text-gray-600">满意客户</p>
            </div>
            <div className="text-center p-4">
              <p className="text-4xl font-bold text-blue-600">10000+</p>
              <p className="text-gray-600">服务器部署</p>
            </div>
            <div className="text-center p-4">
              <p className="text-4xl font-bold text-blue-600">24/7</p>
              <p className="text-gray-600">技术支持</p>
            </div>
          </div>
        </div>
      </section>

      {/* 特性部分 */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">为何选择我们的服务器托管</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              MCPServer.digital提供业界领先的Minecraft服务器托管服务，让您的游戏体验更加顺畅，服务器管理更加简单
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 特性1 */}
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">高性能服务器</h3>
              <p className="text-gray-600">
                采用最新的硬件设备和优化的网络架构，确保游戏运行流畅，无卡顿。
              </p>
            </div>
            
            {/* 特性2 */}
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">DDoS防护</h3>
              <p className="text-gray-600">
                专业的DDoS防护系统，确保您的服务器免受攻击，始终保持在线。
              </p>
            </div>
            
            {/* 特性3 */}
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">一键安装模组</h3>
              <p className="text-gray-600">
                简单易用的控制面板，一键安装各种流行的Minecraft模组和插件。
              </p>
            </div>
            
            {/* 特性4 */}
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">自动备份</h3>
              <p className="text-gray-600">
                定时自动备份您的游戏数据，确保数据安全，随时可以恢复。
              </p>
            </div>
            
            {/* 特性5 */}
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">全球加速</h3>
              <p className="text-gray-600">
                全球节点部署，无论您在哪里，都能享受低延迟的游戏体验。
              </p>
            </div>
            
            {/* 特性6 */}
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7技术支持</h3>
              <p className="text-gray-600">
                专业的技术团队全天候在线，随时解决您的问题。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 价格方案 */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">选择最适合您的方案</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              我们提供多种价格方案，满足不同规模的需求，从小型朋友聚会到大型公共服务器
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 基础方案 */}
            <div className="card border border-gray-200">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold mb-2">基础方案</h3>
                <p className="text-gray-600 mb-4">适合小型服务器，好友联机</p>
                <p className="text-4xl font-bold mb-4">¥29<span className="text-base font-normal text-gray-600">/月</span></p>
                <Link href="/pricing" className="btn btn-primary w-full block text-center">
                  选择方案
                </Link>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2GB RAM</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10名玩家容量</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>20GB SSD存储</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>基础DDoS防护</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 高级方案 */}
            <div className="card border-2 border-blue-600 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-semibold rounded-bl">
                最受欢迎
              </div>
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold mb-2">高级方案</h3>
                <p className="text-gray-600 mb-4">适合中型服务器，插件丰富</p>
                <p className="text-4xl font-bold mb-4">¥69<span className="text-base font-normal text-gray-600">/月</span></p>
                <Link href="/pricing" className="btn btn-primary w-full block text-center">
                  选择方案
                </Link>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>6GB RAM</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>30名玩家容量</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>50GB SSD存储</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>高级DDoS防护</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>优先技术支持</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 专业方案 */}
            <div className="card border border-gray-200">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold mb-2">专业方案</h3>
                <p className="text-gray-600 mb-4">适合大型公共服务器</p>
                <p className="text-4xl font-bold mb-4">¥129<span className="text-base font-normal text-gray-600">/月</span></p>
                <Link href="/pricing" className="btn btn-primary w-full block text-center">
                  选择方案
                </Link>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>12GB RAM</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>100名玩家容量</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>100GB SSD存储</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>企业级DDoS防护</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7专属技术支持</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>专属IP地址</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="hero-gradient text-white py-16">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">准备开始您的Minecraft服务器了吗？</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            只需几分钟，您就能拥有属于自己的高性能Minecraft服务器。现在注册即可获得7天免费试用！
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/register" className="btn bg-white text-blue-600 hover:bg-gray-100">
              立即注册
            </Link>
            <Link href="/contact" className="btn bg-transparent border border-white text-white hover:bg-white/10">
              了解更多
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
