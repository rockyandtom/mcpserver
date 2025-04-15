'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 这里应该实现实际的表单提交逻辑
    // 模拟API请求
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('消息已发送，我们将尽快与您联系！');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('发送失败，请稍后再试。');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* 页面标题区 */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">联系我们</h1>
            <p className="text-lg md:text-xl opacity-90">
              无论您有任何问题、建议或需求，我们都乐意倾听并提供帮助
            </p>
          </div>
        </div>
      </section>

      {/* 联系表单和信息 */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 联系表单 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">发送消息</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    您的姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    电子邮箱 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    主题 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">请选择</option>
                    <option value="general">一般咨询</option>
                    <option value="support">技术支持</option>
                    <option value="billing">账单问题</option>
                    <option value="sales">销售咨询</option>
                    <option value="partnership">合作机会</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    消息内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '发送中...' : '发送消息'}
                </button>
              </form>
            </div>

            {/* 联系信息 */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-6">联系方式</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">电话</h3>
                      <p className="text-gray-600 mt-1">+86 10 8888 8888</p>
                      <p className="text-gray-500 text-sm mt-1">周一至周五 9:00-18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">电子邮箱</h3>
                      <p className="text-gray-600 mt-1">support@mcserver.com</p>
                      <p className="text-gray-500 text-sm mt-1">24小时内回复</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">地址</h3>
                      <p className="text-gray-600 mt-1">北京市朝阳区科技园区88号</p>
                      <p className="text-gray-500 text-sm mt-1">邮编: 100022</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 社交媒体链接 */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">关注我们</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.01 4.44c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-3 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-5 3.03c1.14 0 2.07.93 2.07 2.07 0 1.14-.93 2.07-2.07 2.07-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07zM12 19c-2.03 0-3.89-.67-5.38-1.79 1.84-1.16 3.47-2.73 4.4-4.21.23-.38.28-.84.15-1.28-.12-.44-.45-.81-.88-.94-.43-.13-.88-.08-1.26.14-.38.22-.64.6-.7 1.09-1.14.98-2.35 1.76-3.65 2.28.93-1.96 2.58-3.44 4.62-4.5.57-.29 1.17-.52 1.8-.7.05 0 .09-.01.14-.02.45-.06.91-.1 1.37-.1 2.03 0 3.89.67 5.38 1.79-1.84 1.16-3.47 2.73-4.4 4.21-.23.38-.28.84-.15 1.28.12.44.45.81.88.94.43.13.88.08 1.26-.14.38-.22.64-.6.7-1.09 1.14-.98 2.35-1.76 3.65-2.28-.93 1.96-2.58 3.44-4.62 4.5-.57.29-1.17.52-1.8.7-.05 0-.09.01-.14.02-.45.06-.91.1-1.37.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 地图区域 */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">来访路线</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-96">
              {/* 实际项目中应该替换为真实的地图组件 */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">此处应显示地图（实际项目中请集成地图API）</p>
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
              在联系我们之前，您可以查看以下常见问题，可能已经有您需要的答案
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">如何获取技术支持？</h3>
              <p className="text-gray-600">
                您可以通过本页面的联系表单、发送邮件至support@mcserver.com或拨打我们的客服电话获取技术支持。
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">服务器出现问题怎么办？</h3>
              <p className="text-gray-600">
                如果您的服务器出现问题，请先查看我们的帮助文档，如果无法解决，请联系我们的技术支持团队。
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">如何申请退款？</h3>
              <p className="text-gray-600">
                如需申请退款，请发送邮件至billing@mcserver.com，说明您的账号信息和退款原因，我们会在3个工作日内处理您的请求。
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">如何成为您的合作伙伴？</h3>
              <p className="text-gray-600">
                如果您有兴趣成为我们的合作伙伴，请发送邮件至partnership@mcserver.com，说明您的合作意向和相关信息。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 