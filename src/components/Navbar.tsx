'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">MCPServer.digital</span>
            </Link>
          </div>
          
          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              首页
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              服务
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              价格
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              博客
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              联系
            </Link>
            <div className="ml-4">
              <Link 
                href="/login" 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700"
              >
                登录/注册
              </Link>
            </div>
          </div>
          
          {/* 移动端导航按钮 */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">打开菜单</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* 移动端导航菜单 */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              首页
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              服务
            </Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              价格
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              博客
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              联系
            </Link>
            <div className="mt-4 px-3">
              <Link 
                href="/login" 
                className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700"
              >
                登录/注册
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 