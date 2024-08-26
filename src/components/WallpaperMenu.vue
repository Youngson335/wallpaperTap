<template>
  <ul class="menu__list">
    <li
      v-for="(item, index) in menuItems"
      :key="index"
      :class="{ activeLink: activeLink === item.id, [item.class]: true }"
    >
      <router-link :to="item.link">
        {{ item.label }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeLink: 1,
      menuItems: [
        {
          label: "Выбрать",
          link: "/wallpaper/select",
          class: "link__left",
          id: 1,
        },
        {
          label: "Предпросмотр",
          link: "/wallpaper/preview",
          class: "link__center",
          id: 2,
        },
        {
          label: "Завершенные",
          link: "/wallpaper/completed",
          class: "link__right",
          id: 3,
        },
      ],
    };
  },
  created() {
    this.activeLink = this.getActiveLink();
  },
  methods: {
    getActiveLink() {
      const currentPath = this.$route.path;
      const activeItem = this.menuItems.find((item) =>
        currentPath.includes(item.link)
      );
      return activeItem ? activeItem.id : 1;
    },
  },
  watch: {
    $route(to, from) {
      this.activeLink = this.getActiveLink();
    },
  },
};
</script>

<style lang="scss">
ul {
  list-style-type: none;
}

li {
  background: #0000009c;
  padding: 5px;
  border-radius: 7px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
a {
  text-decoration: none;
  color: white;
}

.menu__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  padding: 0 14px;
  font-family: "Montserrat", sans-serif;
  text-transform: lowercase;
}

.activeLink {
  background-color: white;
  color: black;
  animation: fadeIn 0.3s ease;
  transition: all 0.3s;
  a {
    color: black;
  }
}

@keyframes fadeIn {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
.link {
  &__left {
    animation: showLeftLink 0.7s ease;
    @keyframes showLeftLink {
      0% {
        opacity: 0;
        transform: translateX(-40px);
      }
      40% {
        transform: translateX(5px);
      }
      60% {
        transform: translateX(-5px);
      }
      100% {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }
  &__right {
    animation: showRightLink 0.7s ease;
    @keyframes showRightLink {
      0% {
        opacity: 0;
        transform: translateX(-40px);
      }
      40% {
        transform: translateX(-5px);
      }
      60% {
        transform: translateX(5px);
      }
      100% {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }
  &__center {
    animation: showCenterLink 0.7s ease;
    @keyframes showCenterLink {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
}
</style>
