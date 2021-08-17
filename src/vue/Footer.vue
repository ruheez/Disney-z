<template>
  <div class="footer">
    <div class="footer_links">
      <div
        class="footer_links-container"
        v-for="sort in links"
        :key="sort.id + sort.name"
      >
        <ul class="footer_ul">
          <li
            v-for="topic in sort.list"
            :key="'locations-' + topic.id"
            class="footer_ul_li"
          >
            <a class="footer_ul_li_link" :href="topic.link">
              {{ topic.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer_copyright">
      <span>Copyright © 1993–2021 streaming. All rights reserved.</span>
      <span
        >Powered by themoviedb - www.themoviedb.org</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      links: {
        locations: {
          id: 1,
          name: "locations",
          list: [
            {
              id: 1,
              link: "./index.html",
              text: "Audio and subtitles",
            },
            {
              id: 2,
              link: "./index.html",
              text: "Media Center",
            },
            {
              id: 3,
              link: "./index.html",
              text: "Privacy",
            },
          ],
        },
        services: {
          id: 2,
          name: "services",
          list: [
            {
              id: 1,
              link: "./index.html",
              text: "Auto-description",
            },
            {
              id: 2,
              link: "./index.html",
              text: "Legal notes",
            },
            {
              id: 3,
              link: "./index.html",
              text: "Customer service",
            },
          ],
        },
        company: {
          id: 3,
          name: "company",
          list: [
            {
              id: 1,
              link: "./index.html",
              text: "About us",
            },
            {
              id: 2,
              link: "./index.html",
              text: "Careers",
            },
            {
              id: 3,
              link: "./index.html",
              text: "World",
            },
          ],
        },
        general: {
          id: 3,
          name: "general",
          list: [
            {
              id: 1,
              link: "./index.html",
              text: "Reviews",
            },
            {
              id: 2,
              link: "./index.html",
              text: "Partners",
            },
            {
              id: 3,
              link: "./index.html",
              text: "Discounts",
            },
          ],
        },
        news: {
          id: 4,
          name: "news",
          list: [
            {
              id: 1,
              link: "./index.html",
              text: "COVID",
            },
            {
              id: 2,
              link: "./index.html",
              text: "Growth",
            },
            {
              id: 3,
              link: "./index.html",
              text: "Plans",
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  margin: 50px;
  background-color: #141414;
  color: grey;
  white-space: nowrap;
}

.footer_links {
  display: flex;
  flex-direction: row;
}

.footer_links-container {
  display: flex;
  width: 100%;
  min-height: 100px;
  margin-top: 25px;
  text-align: center;
  overflow-y: hidden;
}

.footer_ul {
  padding: 0 40px 0 0;
  text-align: left;
}

.footer_ul_li {
  list-style: none;
  line-height: 23px;
}

.footer_ul_li_link {
  cursor: pointer;
  color: grey;
  text-decoration: none;
}

.footer_ul_li_link:hover {
  color: #1c55ff;
}

.footer_copyright {
  display: flex;
  flex-direction: column;
  margin: 50px 40px 0 0;
}

@media only screen and (max-width: 600px) {
  .footer {
    flex-wrap: wrap;
    height: 100%;
    white-space: normal;
  }
  .footer_links {
    flex-direction: column;
  }
}
</style>
