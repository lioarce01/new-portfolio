import React, { Fragment, useState } from "react"
import useLocalStorage from "use-local-storage"
import { Disclosure, Menu } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import foxLogoDark from "../assets/images/foxLogo-dark.png"
import foxLogoLight from "../assets/images/foxLogo.png"
import { Link } from "react-router-dom"
import { MdDarkMode } from "react-icons/md"
import { MdLightMode } from "react-icons/md"
import "../index.css"

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Works", href: "/works", current: false },
  { name: "Skills", href: "/skills", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const [dark, setDark] = useLocalStorage("dark", false)
  const [toggleButton, setToggleButton] = useState(false)

  const handleToggle = () => {
    setToggleButton(!toggleButton)
  }

  const toggleDark = () => {
    setDark(!dark)
    if (dark) {
      document.body.classList.remove("dark")
    } else {
      document.body.classList.add("dark")
    }
  }

  return (
    <Disclosure as="nav" className="bg-[#141414] dark:bg-[#FFFAF0]">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#3b3b3b] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-[#141414] dark:hover:bg-[#dfdad1]">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {!dark ? (
                    <img
                      className="hidden lg:block h-auto w-[45px]"
                      src={foxLogoDark}
                      alt="logo"
                    />
                  ) : (
                    <img
                      className="hidden lg:block h-auto w-[45px]"
                      src={foxLogoLight}
                      alt="logo"
                    />
                  )}
                  {!dark ? (
                    <img
                      className="block lg:hidden h-auto w-[45px]"
                      src={foxLogoDark}
                      alt="logo"
                    />
                  ) : (
                    <img
                      className="block lg:hidden h-auto w-[45px]"
                      src={foxLogoLight}
                      alt="logo"
                    />
                  )}
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? " text-gray-300 hover:bg-[#3b3b3b] hover:text-white dark:text-[#141414] dark:hover:bg-[#dfdad1]"
                            : "text-gray-300 hover:bg-[#3b3b3b] hover:text-white dark:text-[#141414] dark:hover:bg-[#dfdad1]",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button onClick={handleToggle} className="text-[#141414]">
                  {toggleButton ? (
                    <MdDarkMode
                      className="w-[30px] h-auto text-[#fcf9df] transition duration-300 rounded-md bg-[#3b3b3b] p-[2px] hover:bg-[#535353]"
                      onClick={toggleDark}
                    />
                  ) : (
                    <MdLightMode
                      className=" w-[30px] h-auto hover:bg-gray-100 transition duration-300 rounded-md bg-gray-300 p-[2px]"
                      onClick={toggleDark}
                    />
                  )}
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-gray-300 hover:bg-[#3b3b3b] hover:text-white dark:text-[#141414] dark:hover:bg-[#dfdad1]"
                      : "text-gray-300 hover:bg-[#3b3b3b] hover:text-white dark:text-[#141414] dark:hover:bg-[#dfdad1]",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
