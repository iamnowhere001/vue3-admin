const Layout = () => import(/* webpackChunkName: "layout" */ "@/layout");

export function autoLoadRoutes() {
  const files = require.context("@/views", true, /\index.vue$/);
  // 自动加载路由
  const autoLoadRoutes = [];

  files.keys().forEach((key) => {
    let fileUrl = key.replace(/\.\//g, ""); //匹配路径
    let fileLevels = fileUrl.split(".")[0].split("/");
    let menuCode = fileLevels[fileLevels.length - 2];
    autoLoadRoutes.push({
      //   path: `/${routePath}`,
      menuCode,
      component: () => import(`@/views/${fileUrl}`),
    });
  });
  return autoLoadRoutes;
}

export function createRoutes(asyncMenus, loadRoutes) {
  // console.log(asyncMenus, loadRoutes);
  //系统大菜单
  const sysMenus = asyncMenus.filter((route) => route?.treeNodeType === 0);
  //一级菜单
  sysMenus.forEach((menu) => {
    const children = asyncMenus
      .filter((item) => item?.fatherId === menu?.id)
      .map((menu) => {
        const obj = {
          component: Layout,
          name: menu.menuCode,
          path: "/",
          meta: {
            title: menu.menuName,
            icon: menu.menuIcon || "ri-home-fill",
            hidden: !menu.isVisible,
            isLink: menu.isNewWindow,
          },
        };
        const children = asyncMenus
          .filter((item) => item?.fatherId === menu?.id)
          .map((menu) => {
            let child = {
              name: menu.menuCode,
              path: menu.menuPath,
              meta: {
                title: menu.menuName,
                icon: menu.menuIcon || "ri-home-fill",
                hidden: !menu.isVisible,
                isLink: menu.isNewWindow,
              },
              parent: obj,
            };
            const index = loadRoutes.findIndex(
              (item) => item.menuCode === menu.menuCode
            );
            if (index !== -1) {
              child.component = loadRoutes[index].component;
            }
            return child;
          });
        if (children.length > 0) {
          const list = children.filter((item) => !item.meta.hidden);
          return {
            ...obj,
            redirect: list[0].path,
            children,
          };
        } else {
          let child = { ...obj, path: menu.menuPath };
          const index = loadRoutes.findIndex(
            (item) => item.menuCode === menu.menuCode
          );
          if (index !== -1) {
            child.component = loadRoutes[index].component;
          }
          const children = [child];
          return {
            ...obj,
            redirect: child.path,
            children,
          };
        }
      });
    menu.children = children;
  });
  console.log(sysMenus);
  // return [
  //   {
  //     path: "/",
  //     name: "layout",
  //     component: Layout,
  //   },
  // ];
  return sysMenus[0].children;
}
