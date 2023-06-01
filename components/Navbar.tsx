"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export const Navbar = () => {
  const isLogged = true;
  const [providers, setProviders] = useState(null);

  const handlerSignOut = () => {
    signOut();
  };

  useEffect(() => {
    const handlerProviders = async () => {
      const res = await getProviders();
      setProviders(res as any);
    };
    handlerProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          className="object-contain"
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
        />
        <p className="logo_text">Proptopia</p>
      </Link>
      {/* Desktop */}
      <div className="sm:flex hidden">
        {isLogged ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Crear un post
            </Link>

            <button className="outline_btn" onClick={handlerSignOut}>
              Salir
            </button>

            <Link href="/profile">
              <Image
                className="rounded-full"
                src="/assets/images/logo.svg"
                alt="profile"
                width={37}
                height={37}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                const { name, id } = provider as any;
                return (
                  <button
                    className="black_btn"
                    key={name}
                    onClick={() => signIn(id)}
                  >
                    Iniciar
                  </button>
                );
              })}
          </>
        )}
      </div>

      {/* Moviles */}
      <div className="sm:hidden flex relative">
        {isLogged ? (
          <div className="flex">
            <Image
              className="rounded-full"
              src="/assets/images/logo.svg"
              alt="profile"
              width={37}
              height={37}
              // onClick={}
            />
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                const { name, id } = provider as any;
                return (
                  <button
                    className="black_btn"
                    key={name}
                    onClick={() => signIn(id)}
                  >
                    Iniciar
                  </button>
                );
              })}
          </>
        )}
      </div>
    </nav>
  );
}
