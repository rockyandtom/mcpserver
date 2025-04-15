import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* 页面标题区 */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">简单透明的价格</h1>
            <p className="text-lg md:text-xl opacity-90">
              选择最适合您需求的Minecraft服务器托管方案，无隐藏费用
            </p>
          </div>
        </div>
      </section>

      {/* 价格方案区 */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 基础方案 */}
            <div className="card border border-gray-200 transition-transform hover:-translate-y-1 duration-300">
              <div className="p-8 border-b">
                <h3 className="text-2xl font-bold mb-2">基础方案</h3>
                <p className="text-gray-600 mb-4">适合小型服务器，好友联机</p>
                <div className="flex items-end mb-6">
                  <span className="text-5xl font-bold">¥29</span>
                  <span className="text-gray-600 ml-2 mb-1">/月</span>
                </div>
                <Link href="/register" className="btn btn-primary w-full block text-center">
                  选择方案
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2GB RAM</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10名玩家容量</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>20GB SSD存储</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>基础DDoS防护</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>标准技术支持</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>每周自动备份</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>共享IP地址</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>优先技术支持</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>自定义域名</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 高级方案 */}
            <div className="card border-2 border-blue-600 shadow-xl transition-transform hover:-translate-y-1 duration-300 relative z-10 md:-mt-4 md:-mb-4">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl">
                最受欢迎
              </div>
              <div className="p-8 border-b">
                <h3 className="text-2xl font-bold mb-2">高级方案</h3>
                <p className="text-gray-600 mb-4">适合中型服务器，插件丰富</p>
                <div className="flex items-end mb-6">
                  <span className="text-5xl font-bold">¥69</span>
                  <span className="text-gray-600 ml-2 mb-1">/月</span>
                </div>
                <Link href="/register" className="btn btn-primary w-full block text-center">
                  选择方案
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>6GB RAM</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>30名玩家容量</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>50GB SSD存储</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>高级DDoS防护</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>优先技术支持</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>每日自动备份</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>共享IP地址</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>自定义域名</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* 专业方案 */}
            <div className="card border border-gray-200 transition-transform hover:-translate-y-1 duration-300">
              <div className="p-8 border-b">
                <h3 className="text-2xl font-bold mb-2">专业方案</h3>
                <p className="text-gray-600 mb-4">适合大型公共服务器</p>
                <div className="flex items-end mb-6">
                  <span className="text-5xl font-bold">¥129</span>
                  <span className="text-gray-600 ml-2 mb-1">/月</span>
                </div>
                <Link href="/register" className="btn btn-primary w-full block text-center">
                  选择方案
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>12GB RAM</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>100名玩家容量</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>100GB SSD存储</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>企业级DDoS防护</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7专属技术支持</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>每日多次自动备份</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>专属IP地址</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>自定义域名</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 企业方案 */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-4">企业定制方案</h2>
                <p className="text-gray-600 mb-6">
                  需要更强大的配置或自定义功能？我们提供企业级解决方案，满足您的特殊需求。
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>根据需求定制服务器配置</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>专属客户经理服务</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>插件和模组定制开发</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>专属服务器集群</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary inline-block">
                  联系我们获取报价
                </Link>
              </div>
              <div className="bg-blue-600 p-8 md:p-12 text-white">
                <h3 className="text-xl font-bold mb-4">企业方案包含</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>高级安全保障，包括DDoS防护和反作弊系统</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>全球加速网络，保证全球玩家的低延迟体验</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>高性能专用硬件，确保服务器始终保持最佳状态</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>专业的技术咨询和培训服务</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">常见问题</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              关于我们的价格和服务的一些常见问题解答
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">我可以随时升级我的方案吗？</h3>
              <p className="text-gray-600">
                是的，您可以随时升级您的方案。升级后，我们会按照新旧方案的价格差额按比例计费。
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">方案中包含多少玩家槽位？</h3>
              <p className="text-gray-600">
                基础方案包含10个玩家槽位，高级方案包含30个玩家槽位，专业方案包含100个玩家槽位。
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">是否提供免费试用？</h3>
              <p className="text-gray-600">
                是的，我们提供7天的免费试用期，让您充分体验我们的服务质量。
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">如何获取技术支持？</h3>
              <p className="text-gray-600">
                我们提供多种技术支持渠道，包括在线客服、邮件支持和电话支持。专业方案用户还可以享受24/7专属技术支持。
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">可以使用自定义域名吗？</h3>
              <p className="text-gray-600">
                高级和专业方案支持使用自定义域名，基础方案不支持此功能。
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">支持哪些Minecraft版本？</h3>
              <p className="text-gray-600">
                我们支持所有主流的Minecraft版本，包括最新版本和历史版本。您可以在控制面板中轻松切换版本。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">立即开始您的Minecraft服务器之旅</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            选择适合您的方案，享受高性能、稳定可靠的Minecraft服务器托管服务。注册即可获得7天免费试用！
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register" className="btn bg-white text-blue-600 hover:bg-gray-100">
              立即注册
            </Link>
            <Link href="/contact" className="btn bg-transparent border border-white text-white hover:bg-white/10">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 