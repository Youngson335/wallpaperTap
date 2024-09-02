<template>
  <ul class="menu__list">
    <li
      v-for="(item, index) in menuItems"
      ref="items"
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
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["getBackgroundColor"]),
    checkColor() {
      return this.getBackgroundColor;
    },
  },
  methods: {
    ...mapGetters(["getBackgroundColor"]),
    getActiveLink() {
      const currentPath = this.$route.path;
      const activeItem = this.menuItems.find((item) =>
        currentPath.includes(item.link)
      );
      return activeItem ? activeItem.id : 1;
    },
    checkActiveColorTheme() {
      const item1 = document.querySelector(".link__center");
      const item2 = document.querySelector(".link__right");
      const item3 = document.querySelector(".link__left");

      item1.style.background = this.getBackgroundColor;
      item2.style.background = this.getBackgroundColor;
      item3.style.background = this.getBackgroundColor;
    },
  },
  watch: {
    $route(to, from) {
      this.activeLink = this.getActiveLink();
    },
    getBackgroundColor() {
      this.checkActiveColorTheme();
    },
  },
  created() {
    this.activeLink = this.getActiveLink();
  },
  mounted() {
    this.checkActiveColorTheme();
  },
};
</script>

<style lang="scss">
ul {
  list-style-type: none;
}

li {
  background: #53583b;
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
  margin-bottom: 5px;
}

.activeLink {
  background-color: white !important;
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
