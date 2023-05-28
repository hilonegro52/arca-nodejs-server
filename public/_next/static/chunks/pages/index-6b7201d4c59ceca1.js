(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, a, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(1074);
        },
      ]);
    },
    1074: function (e, a, r) {
      "use strict";
      let s;
      r.r(a),
        r.d(a, {
          default: function () {
            return L;
          },
        });
      var t = r(5893),
        l = r(7294);
      let n = () => {
        let e = (0, l.useRef)(null);
        (0, l.useEffect)(
          () => (
            window.addEventListener("scroll", a),
            () => {
              window.removeEventListener("scroll", a);
            }
          ),
          []
        );
        let a = (a) => {
          let r = window.pageYOffset;
          e.current.style.transform = "translateY(" + 0.5 * r + "px)";
        };
        return (0, t.jsxs)("div", {
          className: "relative z-[-1]",
          ref: e,
          children: [
            (0, t.jsx)("div", {
              className:
                "absolute z-10 w-full h-full bg-gradient-to-t from-black to-transparent from-0% to-60%",
            }),
            (0, t.jsx)("video", {
              className:
                "object-cover object-[20%] md:object-[30%] lg:object-[35%] xl:object-[100%] h-[800px] md:h-[840px] xl:h-[1080px]",
              autoPlay: !0,
              muted: !0,
              loop: !0,
              src: "/heroMov.mp4",
            }),
          ],
        });
      };
      var d = r(1664),
        i = r.n(d),
        o = r(5434),
        c = r(5788),
        x = r(3656);
      let m = () => {
        let { language: e, translate: a, setLanguage: r } = (0, x.Z)(),
          [s, n] = (0, l.useState)(!1),
          [d, o] = (0, l.useState)(!1),
          c = (0, l.useRef)(null),
          m = (0, l.useRef)(null);
        (0, l.useEffect)(
          () => (
            window.addEventListener("scroll", p),
            (window.prevScroll = window.pageYOffset),
            () => {
              window.removeEventListener("scroll", p);
            }
          ),
          []
        );
        let p = (e) => {
            let a = window.pageYOffset;
            e.currentTarget.prevScroll > a && window.innerWidth > 725
              ? (m.current.style.top = "0")
              : window.innerWidth > 725 && (m.current.style.top = "-105px"),
              (e.currentTarget.prevScroll = a),
              window.pageYOffset > 50
                ? c.current.classList.replace(
                    "md:bg-transparent",
                    "md:bg-darkDrop"
                  )
                : c.current.classList.replace(
                    "md:bg-darkDrop",
                    "md:bg-transparent"
                  );
          },
          f = (e) => {
            n((e) => !e), o((e) => !e);
          };
        return (0, t.jsx)("div", {
          className: "menu md:p-4",
          ref: m,
          children: (0, t.jsx)("menu", {
            className:
              "md:rounded-3xl md:opacity-80 dark:md:opacity-95 md:bg-transparent bg-darkOld px-4 md:px-[4rem] lg:px-[7rem] md:py-4",
            ref: c,
            children: (0, t.jsxs)("div", {
              className: "navbar bg-transparent",
              children: [
                (0, t.jsxs)("div", {
                  className: "hamburg group ".concat(s ? "change" : ""),
                  onClick: f,
                  children: [
                    (0, t.jsx)("div", {
                      className: "bar1 group-hover:bg-naranja",
                    }),
                    (0, t.jsx)("div", {
                      className: "bar2 group-hover:bg-naranja",
                    }),
                    (0, t.jsx)("div", {
                      className: "bar3 group-hover:bg-naranja",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "w-full flex justify-end md:w-auto md:block  md:justify-start text-naranja md:text-naranja",
                  children: (0, t.jsx)(i(), {
                    className:
                      "home hover:bg-transparent text-[1.3rem] md:text-[2rem]",
                    href: "/",
                    children: "ARCA",
                  }),
                }),
                (0, t.jsxs)("div", {
                  className:
                    "menu-items text-dark md:text-light dark:text-light dark:bg-darkDrop bg-light md:bg-transparent md:gap-6 ".concat(
                      d ? "is-active" : ""
                    ),
                  children: [
                    (0, t.jsx)(i(), {
                      href: "#porque",
                      className:
                        "hover:bg-marcosFinos hover:md:bg-transparent hover:md:text-naranja dark:hover:md:text-naranja dark:hover:text-naranja dark:hover:bg-darkDropHov py-4",
                      onClick: f,
                      children: a[e].porque,
                    }),
                    (0, t.jsx)(i(), {
                      href: "#servicios",
                      className:
                        "hover:bg-marcosFinos hover:md:bg-transparent hover:md:text-naranja dark:hover:md:text-naranja dark:hover:text-naranja dark:hover:bg-darkDropHov py-4",
                      onClick: f,
                      children: a[e].servicios,
                    }),
                    (0, t.jsx)(i(), {
                      href: "#como",
                      className:
                        "hover:bg-marcosFinos hover:md:bg-transparent hover:md:text-naranja dark:hover:md:text-naranja dark:hover:text-naranja dark:hover:bg-darkDropHov py-4",
                      onClick: f,
                      children: a[e].como,
                    }),
                    (0, t.jsx)(i(), {
                      href: "#equipo",
                      className:
                        "hover:bg-marcosFinos hover:md:bg-transparent hover:md:text-naranja dark:hover:md:text-naranja dark:hover:text-naranja dark:hover:bg-darkDropHov py-4",
                      onClick: f,
                      children: a[e].equipo,
                    }),
                    (0, t.jsx)(i(), {
                      href: "#hablemos",
                      className:
                        "hover:bg-marcosFinos hover:md:bg-transparent hover:md:text-naranja dark:hover:md:text-naranja dark:hover:text-naranja dark:hover:bg-darkDropHov py-4",
                      onClick: f,
                      children: a[e].hablemos,
                    }),
                    (0, t.jsx)(h, {
                      setNavbar: n,
                      setMenuItems: o,
                      setLang: r,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      function h(e) {
        let { setNavbar: a, setMenuItems: r, setLang: s } = e,
          [n, d] = (0, l.useState)(!1),
          i = () => {
            d((e) => !e);
          },
          x = (e) => {
            s(e.currentTarget.textContent.toLowerCase()),
              localStorage.setItem(
                "arcaLang",
                e.currentTarget.textContent.toLowerCase()
              ),
              a((e) => !e),
              r((e) => !e),
              d((e) => !e);
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className: "h-full",
              onClick: i,
              children: (0, t.jsxs)("div", {
                className:
                  "dropdown-items h-full flex items-center justify-between md:text-light hover:bg-marcosFinos md:hover:bg-transparent hover:md:text-naranja dark:hover:text-naranja dark:hover:bg-darkDropHov !px-8 md:!px-0",
                href: "/",
                children: [
                  (0, t.jsx)(o.$lZ, { size: 23 }),
                  n
                    ? (0, t.jsx)(c.px3, { size: 23 })
                    : (0, t.jsx)(c.S4p, { size: 23 }),
                ],
              }),
            }),
            (0, t.jsxs)("div", {
              className:
                "md:bg-light dark:bg-darkDrop dark:md:bg-darkDrop text-dark dark:text-light md:absolute md:top-[60px] md:right-[60px] md:w-60 md:rounded md:drop-shadow-lg h-auto ".concat(
                  n
                    ? "dark:md:border dark:md:border-darkDropHov flex flex-col items-center justify-center"
                    : "hidden"
                ),
              children: [
                (0, t.jsx)("div", {
                  className:
                    "dropdown-items w-full flex items-center justify-center hover:bg-marcosFinos dark:hover:bg-darkDropHov dark:hover:text-naranja py-4",
                  onClick: x,
                  children: "Espa\xf1ol",
                }),
                (0, t.jsx)("div", {
                  className:
                    "dropdown-items w-full flex items-center justify-center hover:bg-marcosFinos dark:hover:bg-darkDropHov dark:hover:text-naranja py-4",
                  onClick: x,
                  children: "English",
                }),
                (0, t.jsx)("div", {
                  className:
                    "dropdown-items w-full flex items-center justify-center hover:bg-marcosFinos dark:hover:bg-darkDropHov dark:hover:text-naranja py-4",
                  onClick: x,
                  children: "Portugu\xeas",
                }),
                (0, t.jsx)("div", {
                  className:
                    "dropdown-items w-full h-full flex items-center justify-center hover:bg-marcosFinos dark:hover:bg-darkDropHov dark:hover:text-naranja py-4",
                  onClick: x,
                  children: "Italiano",
                }),
              ],
            }),
          ],
        });
      }
      var p = function (e) {
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(m, {}),
            (0, t.jsx)(t.Fragment, { children: e.children }),
          ],
        });
      };
      let f = () => {
          let { language: e, translate: a } = (0, x.Z)(),
            r = (0, l.useRef)(null);
          return (0, t.jsxs)("div", {
            id: "porque",
            className:
              "grid grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr_1fr] z-50",
            children: [
              (0, t.jsx)("section", {
                className:
                  "flex flex-col pt-8 md:pt-24 items-center bg-black text-light h-[450px] md:h-[800px]",
                children: (0, t.jsxs)("article", {
                  className:
                    "max-w-xs h-[80%] md:h-[70%] grid grid-cols-[30px_1fr] md:grid-cols-[50px_1fr] grid-rows-[1fr_3fr_2fr]",
                  children: [
                    (0, t.jsx)("div", {
                      className: "relative row-[1/4] flex items-center",
                      children: (0, t.jsx)("div", {
                        className: "relative h-[90%] w-px bg-light",
                        children: (0, t.jsx)("div", {
                          className:
                            "absolute top-[40px] left-px bg-light w-[3px] h-24",
                        }),
                      }),
                    }),
                    (0, t.jsx)("p", {
                      className: "text-sm",
                      children: a[e].xqTit,
                    }),
                    (0, t.jsx)("h2", {
                      className: "text-2xl md:leading-relaxed",
                      children: a[e].xqSubTit,
                    }),
                    (0, t.jsx)("p", {
                      className: "text-base md:text-lg",
                      children: a[e].xqTex,
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("section", {
                className: "",
                children: (0, t.jsx)("img", {
                  ref: r,
                  className:
                    "z-[-1] left-[0px] md:left-[100px] xl:left-[350px] h-[450px] md:h-[800px] object-cover",
                  src: "/porque.jpg",
                  alt: "",
                }),
              }),
            ],
          });
        },
        u = () => {
          let { language: e, translate: a } = (0, x.Z)();
          return (0, t.jsxs)("div", {
            id: "servicios",
            className: "grid grid-cols-[1fr] md:grid-cols-[1fr_1fr]",
            children: [
              (0, t.jsx)("section", {
                className:
                  "flex flex-col pt-8 md:pt-24 items-center bg-light dark:bg-darkDark text-dark h-[200px] md:h-[370px]",
                children: (0, t.jsxs)("article", {
                  className:
                    "max-w-xs h-[80%] md:h-[70%] grid grid-cols-[30px_1fr] md:grid-cols-[50px_1fr] grid-rows-[1fr_3fr]",
                  children: [
                    (0, t.jsx)("div", {
                      className: "relative row-[1/4] flex items-center",
                      children: (0, t.jsx)("div", {
                        className:
                          "relative h-[90%] w-px bg-dark dark:bg-light",
                        children: (0, t.jsx)("div", {
                          className:
                            "absolute top-[15px] left-px bg-dark dark:bg-light w-[3px] h-24",
                        }),
                      }),
                    }),
                    (0, t.jsx)("p", {
                      className: "text-sm text-dark dark:text-light",
                      children: a[e].servTit,
                    }),
                    (0, t.jsx)("h2", {
                      className:
                        "text-dark dark:text-light text-2xl md:leading-relaxed",
                      children: a[e].servSubTit,
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: " bg-light dark:bg-darkDark hidden md:block",
              }),
            ],
          });
        },
        g = (e) => {
          let { img: a, title: r, backText: s, align: n } = e,
            [d, i] = (0, l.useState)(!1),
            o = (e) => {
              let a = e.currentTarget;
              (a.style.animation = d
                ? "2s cubic-bezier(0.34, 1.56, 0.64, 1) 0s running forwards card-flip-bw"
                : "2s cubic-bezier(0.34, 1.56, 0.64, 1) 0s running forwards card-flip-fw"),
                i(!d);
            };
          return (0, t.jsx)("section", {
            className: "relative flip-card bg-transparent cursor-pointer",
            children: (0, t.jsxs)("div", {
              className: "inner",
              onClick: o,
              children: [
                (0, t.jsxs)("div", {
                  className: "front absolute rounded-3xl overflow-hidden",
                  children: [
                    (0, t.jsx)("img", { src: a, alt: "" }),
                    (0, t.jsx)("div", {
                      className:
                        "w-full h-full absolute top-0 px-4 md:px-8 flex",
                      children: (0, t.jsx)("h2", {
                        className:
                          "text-[4.7rem] md:text-[5.3rem] lg:text-[9.4rem] break-all ".concat(
                            n,
                            " text-light"
                          ),
                        children: r,
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className:
                    "back relative rounded-3xl overflow-hidden bg-naranja",
                  children: [
                    (0, t.jsx)("img", {
                      className: "invisible",
                      src: "/ingreso.jpg",
                      alt: "",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "absolute top-0 bottom-0 flex items-center p-10 ",
                      children: (0, t.jsx)("p", {
                        className:
                          "text-light leading-7 md:leading-10 lg:leading-normal text-xl md:text-[21px] lg:text-4xl",
                        children: s,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        j = () => {
          let { language: e, translate: a } = (0, x.Z)();
          return (0, t.jsx)("div", {
            className: "w-full bg-light dark:bg-darkDark pb-8 md:pb-20",
            children: (0, t.jsxs)("div", {
              className:
                "max-w-[1280px] m-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-8 p-4 lg:p-0",
              children: [
                (0, t.jsx)(g, {
                  img: "/innovacion.jpg",
                  title: a[e].cardFront1,
                  backText: a[e].cardBack1,
                }),
                (0, t.jsx)(g, {
                  img: "/ingreso.jpg",
                  title: a[e].cardFront2,
                  backText: a[e].cardBack2,
                  align: "text-right ml-auto",
                }),
                (0, t.jsx)(g, {
                  img: "/crecimiento.jpg",
                  title: a[e].cardFront3,
                  backText: a[e].cardBack3,
                  align: "text-left self-end",
                }),
                (0, t.jsx)(g, {
                  img: "/calidad.jpg",
                  title: a[e].cardFront4,
                  backText: a[e].cardBack4,
                  align: "text-right ml-auto self-end",
                }),
              ],
            }),
          });
        },
        b = () => {
          let { language: e, translate: a } = (0, x.Z)();
          return (0, t.jsxs)("div", {
            className:
              "flex flex-col items-center justify-center md:items-start absolute z-20 w-full mt-14 md:mt-40",
            children: [
              (0, t.jsx)("div", {
                className:
                  "w-full md:w-[80%] 2xl:w-[70%] bg-dark opacity-80 pt-1 pb-3 md:pb-4 md:pt-3 px-4 flex justify-end",
                children: (0, t.jsx)("div", {
                  className: "max-w-[800px] mt-2 md:mt-0",
                  children: (0, t.jsx)("h1", {
                    className:
                      "text-light text-center md:text-right hero-shadow-h1 text-3xl md:text-[40px] tracking-widest leading-tight",
                    children: a[e].headerTit,
                  }),
                }),
              }),
              (0, t.jsx)("div", {
                className:
                  "w-full md:w-[80%] 2xl:w-[70%] bg-dark opacity-80 mt-14 md:mt-24 px-4 flex justify-start self-end",
                children: (0, t.jsx)("div", {
                  className: "max-w-[650px]",
                  children: (0, t.jsx)("p", {
                    className:
                      "text-light md:max-w-[830px] text-center md:text-left text-lg md:text-2xl pt-1 pb-2 md:pb-3",
                    children: a[e].headerSubTit,
                  }),
                }),
              }),
              (0, t.jsx)(i(), {
                href: "#hablemos",
                className: "self-center",
                children: (0, t.jsx)("button", {
                  className:
                    "hero-button mt-20 md:mt-36 bg-naranja text-light p-2 rounded-lg",
                  children: a[e].headerBoton,
                }),
              }),
            ],
          });
        },
        v = () => {
          let { language: e, translate: a } = (0, x.Z)(),
            r = (0, l.useRef)(null),
            s = (0, l.useRef)(null),
            n = (0, l.useRef)(null);
          (0, l.useEffect)(
            () => (
              window.addEventListener("scroll", d),
              () => {
                window.removeEventListener("scroll", d);
              }
            ),
            []
          );
          let d = (e) => {
            let a = r.current.getBoundingClientRect();
            if (window.innerHeight >= a.y) {
              let e = a.y;
              (s.current.style.transform =
                "translate3d(0px," + 0.2 * e + "px,0px)"),
                (n.current.style.transform = "translatey(-115px)");
            }
          };
          return (0, t.jsxs)("div", {
            id: "como",
            className:
              "w-full items-center relative h-[650px] md:h-[750px] lg:h-[880px]",
            ref: r,
            children: [
              (0, t.jsx)("div", {
                className:
                  "card-como absolute bottom-[-100px] h-full grid grid-rows-1 md:grid-rows-1 md:grid-cols-[1fr_1fr] z-50",
                ref: n,
                children: (0, t.jsx)("section", {
                  className: "flex flex-col justify-end text-light",
                  children: (0, t.jsx)("article", {
                    className:
                      "h-[95%] md:h-[90%] flex justify-center lg:justify-end 2xl:justify-center px-4 md:pr-0",
                    children: (0, t.jsx)("section", {
                      className:
                        "bg-black rounded-2xl md:rounded-3xl h-full max-w-[100%] lg:max-w-[70%] xl:max-w-[80%] 2xl:max-w-[55%] p-8 md:pt-8 lg:pt-16 flex justify-center",
                      children: (0, t.jsxs)("article", {
                        className:
                          "h-full md:h-[100%] lg:h-[70%] grid grid-cols-[30px_1fr] md:grid-cols-[50px_1fr] grid-rows-[1fr] w-[100%]",
                        children: [
                          (0, t.jsx)("div", {
                            className: "relative row-[1/4] flex items-center",
                            children: (0, t.jsx)("div", {
                              className: "relative h-[90%] w-px bg-light",
                              children: (0, t.jsx)("div", {
                                className:
                                  "absolute top-[40px] left-px bg-light w-[3px] h-32",
                              }),
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex flex-col self-center justify-between h-full",
                            children: [
                              (0, t.jsx)("p", {
                                className: "text-sm",
                                children: a[e].comoTit,
                              }),
                              (0, t.jsx)("h2", {
                                className: "text-2xl md:leading-relaxed",
                                children: (0, t.jsx)("span", {
                                  className: "color_11 wixui-rich-text__text",
                                  children: a[e].comoSubTit,
                                }),
                              }),
                              (0, t.jsx)("p", {
                                className: "text-base md:text-lg",
                                children: a[e].comoTex,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
              (0, t.jsx)("img", {
                className:
                  "w-full fixed top-0 z-[-2] object-cover object-[55%] md:object-[35%] h-[750px] md:h-[1080px]",
                src: "/como.jpg",
                alt: "",
                ref: s,
              }),
            ],
          });
        },
        k = () => {
          let e = (0, l.useRef)(null);
          (0, l.useEffect)(
            () => (
              window.addEventListener("scroll", a),
              () => {
                window.removeEventListener("scroll", a);
              }
            ),
            []
          );
          let a = (a) => {
            window.pageYOffset < 816
              ? (e.current.style.display = "none")
              : (e.current.style.display = "block");
          };
          return (0, t.jsx)("div", {
            className:
              "bg-marcosFinos text-dark border-[1px] border-neutral-400 opacity-60 rounded-full fixed bottom-14 md:bottom-4 right-4 p-2 md:p-4 z-50 hidden",
            ref: e,
            children: (0, t.jsx)(i(), {
              className: "hover:bg-transparent",
              href: "/",
              children: (0, t.jsx)(c.wdi, { size: 23 }),
            }),
          });
        },
        w = () => {
          let { language: e, translate: a } = (0, x.Z)();
          return (0, t.jsxs)("div", {
            className:
              "bg-light dark:bg-darkDark text-dark dark:text-light p-4 md:p-8 md:pt-14 pt-14 xl:pt-24",
            children: [
              (0, t.jsxs)("section", {
                id: "equipo",
                className: "max-w-[720px] m-auto",
                children: [
                  (0, t.jsx)("h2", {
                    className: "text-5xl mb-5",
                    children: a[e].eqTit,
                  }),
                  (0, t.jsx)("p", {
                    className: "text-lg mb-4 lg:mb-8 leading-6 md:leading-7",
                    children: a[e].eqTex,
                  }),
                ],
              }),
              (0, t.jsx)("section", {
                children: (0, t.jsx)("img", {
                  className:
                    "w-full object-cover h-[250px] object-[56%] md:h-[491px] md:object-[56%] lg:object-[63%]",
                  src: "/equipo.jpg",
                  alt: "",
                }),
              }),
            ],
          });
        };
      var _ = r(9583);
      let N = (e, a) => {
          let { language: r, translate: s } = (0, x.Z)(),
            [t, n] = (0, l.useState)(e),
            [d, i] = (0, l.useState)({}),
            [o, c] = (0, l.useState)(!1),
            [m, h] = (0, l.useState)(!1),
            [p, f] = (0, l.useState)(null);
          (0, l.useEffect)(() => {
            0 === Object.keys(d).length &&
              o &&
              (h(!0),
              fetch("http://localhost:3000/sendmail", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json, text/plain, */*",
                },
                body: JSON.stringify({
                  nombre: t.name,
                  email: t.email,
                  telefono: t.phone,
                  pais: t.country,
                  empresa: t.company,
                  puesto: t.jobTitle,
                  consulta: t.comments,
                }),
              }).then((a) => {
                200 === a.status
                  ? (n(e),
                    h(!1),
                    f("ok"),
                    setTimeout(() => {
                      f(null);
                    }, 3e3))
                  : (h(!1),
                    f("fail"),
                    setTimeout(() => {
                      f(null);
                    }, 5e3));
              }));
          }, [d]);
          let u = (e) => {
              n({ ...t, [e.target.name]: e.target.value });
            },
            g = (e) => {
              u(e), i(a(t, s, r));
            },
            j = (e) => {
              e.preventDefault(),
                c(!0),
                setTimeout(() => {
                  i(a(t, s, r));
                }, 100);
            };
          return {
            form: t,
            errors: d,
            submit: o,
            loading: m,
            response: p,
            handleChange: u,
            handleBlur: g,
            handleSubmit: j,
          };
        },
        y = {
          zIndex: "2000",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: "#00000080",
        },
        T = () => (0, t.jsx)("div", { style: y }),
        C = () => (0, t.jsx)("div", { className: "loader" });
      r(9806);
      let z = (e) => {
          let { msg: a, bgColor: r } = e;
          return (0, t.jsxs)("div", {
            style: {
              zIndex: "3000",
              position: "fixed",
              bottom: "46px",
              left: "0",
              width: "100%",
              padding: "1rem",
              marginBottom: "1rem",
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
              backgroundColor: r,
            },
            children: [(0, t.jsx)("p", { children: a }), " "],
          });
        },
        D = {
          name: "",
          email: "",
          phone: "",
          country: "",
          company: "",
          jobTitle: "",
          comments: "",
        },
        E = (e, a, r) => {
          let t = {};
          return (
            s && !e.name.trim() && (t.name = a[r].valiNom),
            "" === e.name ||
              /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(e.name.trim()) ||
              (t.name = a[r].invNom),
            s && !e.email.trim() && (t.email = a[r].valiMail),
            "" === e.email ||
              /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
                e.email.trim()
              ) ||
              (t.email = a[r].invMail),
            s && !e.comments.trim() && (t.comments = a[r].valCons),
            (s = !1),
            t
          );
        },
        S = { color: "#f5564b", fontSize: ".8rem" },
        B = () => {
          let { language: e, translate: a } = (0, x.Z)(),
            {
              form: r,
              errors: l,
              submit: n,
              loading: d,
              response: i,
              handleChange: o,
              handleBlur: c,
              handleSubmit: m,
            } = N(D, E);
          s = n;
          let h = (e) => {
            e.target.classList.add("animBtn"),
              setTimeout(() => {
                e.target.classList.remove("animBtn");
              }, 50);
          };
          return (0, t.jsxs)("div", {
            className: "relative",
            children: [
              (0, t.jsxs)("form", {
                className: "contact-form",
                onSubmit: m,
                children: [
                  (0, t.jsxs)("div", {
                    className: "input-container",
                    children: [
                      (0, t.jsx)("input", {
                        className:
                          "bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]",
                        type: "text",
                        name: "name",
                        placeholder: a[e].formNom,
                        value: r.name,
                        onChange: o,
                        onBlur: c,
                      }),
                      (0, t.jsx)("span", { children: "*" }),
                    ],
                  }),
                  (0, t.jsx)("p", {
                    className: "errors",
                    style: S,
                    children: l.name && l.name,
                  }),
                  (0, t.jsxs)("div", {
                    className: "input-container",
                    children: [
                      (0, t.jsx)("input", {
                        className:
                          "bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]",
                        type: "text",
                        name: "email",
                        placeholder: a[e].formMail,
                        value: r.email,
                        onChange: o,
                        onBlur: c,
                      }),
                      (0, t.jsx)("span", { children: "*" }),
                    ],
                  }),
                  (0, t.jsx)("p", {
                    className: "errors",
                    style: S,
                    children: l.email && l.email,
                  }),
                  (0, t.jsx)("div", {
                    className: "input-container",
                    children: (0, t.jsx)("input", {
                      className:
                        "bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]",
                      type: "text",
                      name: "country",
                      placeholder: a[e].formPais,
                      value: r.country,
                      onChange: o,
                      onBlur: c,
                    }),
                  }),
                  (0, t.jsx)("p", {
                    className: "errors",
                    style: S,
                    children: l.country && l.country,
                  }),
                  (0, t.jsx)("div", {
                    className: "input-container",
                    children: (0, t.jsx)("div", {
                      className: "phone-container",
                      children: (0, t.jsx)("input", {
                        className:
                          "bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]",
                        type: "tel",
                        name: "phone",
                        placeholder: a[e].formTel,
                        value: r.phone,
                        onChange: o,
                        onBlur: c,
                      }),
                    }),
                  }),
                  (0, t.jsx)("p", {
                    className: "errors",
                    style: S,
                    children: l.phone && l.phone,
                  }),
                  (0, t.jsx)("div", {
                    className: "input-container",
                    children: (0, t.jsx)("input", {
                      className:
                        "bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]",
                      type: "text",
                      name: "company",
                      placeholder: a[e].formEmp,
                      value: r.company,
                      onChange: o,
                      onBlur: c,
                    }),
                  }),
                  (0, t.jsx)("p", {
                    className: "errors",
                    style: S,
                    children: l.company && l.company,
                  }),
                  (0, t.jsx)("div", {
                    className: "input-container",
                    children: (0, t.jsx)("input", {
                      className:
                        "bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]",
                      type: "text",
                      name: "jobTitle",
                      placeholder: a[e].formPuesto,
                      value: r.jobTitle,
                      onChange: o,
                      onBlur: c,
                    }),
                  }),
                  (0, t.jsx)("p", {
                    className: "errors",
                    style: S,
                    children: l.jobTitle && l.jobTitle,
                  }),
                  (0, t.jsxs)("div", {
                    className: "input-container",
                    children: [
                      (0, t.jsx)("textarea", {
                        className:
                          "bg-light dark:bg-darkDark shadow-[inset_0_-1px_0_#cad2d6] focus:shadow-[inset_0_-2px_0_black] dark:shadow-[inset_0_-1px_0_#42414d] dark:focus:shadow-[inset_0_-2px_0_#f8f9fa]",
                        name: "comments",
                        cols: "50",
                        rows: "5",
                        placeholder: a[e].formCons,
                        value: r.comments,
                        onChange: o,
                        onBlur: c,
                      }),
                      (0, t.jsx)("span", { children: "*" }),
                    ],
                  }),
                  (0, t.jsx)("p", {
                    className: "errors",
                    style: S,
                    children: l.comments && l.comments,
                  }),
                  (0, t.jsx)("p", {
                    className: "required text-[#f5564b]",
                    children: a[e].formCampos,
                  }),
                  (0, t.jsx)("input", {
                    className: "",
                    type: "submit",
                    value: a[e].formBtn,
                    onClick: h,
                  }),
                ],
              }),
              d && (0, t.jsx)(C, {}),
              d && (0, t.jsx)(T, {}),
              i &&
                (0, t.jsx)(z, {
                  msg: "ok" === i ? a[e].consEnv : a[e].consErr,
                  bgColor: "ok" === i ? "#54cf9c" : "#f5564b",
                }),
            ],
          });
        },
        F = () => {
          let { language: e, translate: a } = (0, x.Z)();
          return (0, t.jsxs)("div", {
            id: "hablemos",
            className:
              "grid grid-rows-[1fr_400px] md:grid-rows-1 md:grid-cols-[1fr_1fr] z-50",
            children: [
              (0, t.jsx)("section", {
                className:
                  "order-2 md:order-1 flex flex-col items-center bg-black text-light",
                children: (0, t.jsxs)("article", {
                  className: "h-full flex flex-col justify-center px-4 md:px-0",
                  children: [
                    (0, t.jsx)("div", {
                      className: " text-naranja flex items-center grow-[1]",
                      children: (0, t.jsx)(i(), {
                        className: "home text-5xl",
                        href: "/",
                        children: "ARCA",
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className: "grow-[3] flex flex-col justify-evenly",
                      children: [
                        (0, t.jsx)("p", { children: a[e].contactoTel }),
                        (0, t.jsx)("p", { children: "Email: hi@arca.com.ar" }),
                        (0, t.jsx)("p", {
                          children:
                            "Villa Urquiza, Ciudad Aut\xf3noma de Buenos Aires",
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex justify-evenly text-light",
                          children: [
                            (0, t.jsx)(i(), {
                              target: "_blank",
                              href: "https://api.whatsapp.com/send?phone=54911 59367384&text= Hola!%20Quiero%20consultar%20por%20sus%20servicios!",
                              rel: "noopener noreferrer",
                              children: (0, t.jsx)(_.xpo, {
                                size: 35,
                                className:
                                  "hover:text-naranja transition duration-250 ease-out hover:ease-in",
                              }),
                            }),
                            (0, t.jsx)(i(), {
                              target: "_blank",
                              href: "https://www.linkedin.com/company/arca-software",
                              rel: "noopener noreferrer",
                              children: (0, t.jsx)(_.BUd, {
                                size: 33,
                                className:
                                  "hover:text-naranja transition duration-250 ease-out hover:ease-in",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("section", {
                className: "order-1 md:order-2 bg-light dark:bg-darkDark",
                children: (0, t.jsx)("section", {
                  className:
                    "flex flex-col items-center text-dark dark:text-light",
                  children: (0, t.jsxs)("article", {
                    className:
                      "p-4 md:pb-8 h-full flex flex-col justify-center",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          " text-naranja flex justify-center items-center grow-[1]",
                        children: (0, t.jsx)("h3", {
                          className: "home text-2xl",
                          href: "/",
                          children: a[e].contactoTit,
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "grow-[3] flex flex-col justify-evenly",
                        children: [
                          (0, t.jsx)("p", {
                            className: "mb-4",
                            children: a[e].contactoTex,
                          }),
                          (0, t.jsx)(B, {}),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
      var L = function () {
        return (0, t.jsxs)(p, {
          children: [
            (0, t.jsx)(b, {}),
            (0, t.jsx)(n, {}),
            (0, t.jsx)(f, {}),
            (0, t.jsx)(u, {}),
            (0, t.jsx)(j, {}),
            (0, t.jsx)(v, {}),
            (0, t.jsx)(w, {}),
            (0, t.jsx)(F, {}),
            (0, t.jsx)(k, {}),
            (0, t.jsx)("div", { className: "h-[46px] md:hidden" }),
          ],
        });
      };
    },
    2950: function () {},
    2868: function () {},
    4777: function () {},
    9830: function () {},
    209: function () {},
  },
  function (e) {
    e.O(0, [57, 228, 445, 67, 774, 888, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);
