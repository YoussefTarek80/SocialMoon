<template>
  <headerView />
  <section>
    <div class="row container">
      <div class="col-12 col-lg-4 h-100">
        <div class="profile">
          <profile />
        </div>
        <div class="friend">
          <friend />
        </div>
      </div>
      <div class="main col-12 col-lg-7">
        <div class="partiton">
          <state />
        </div>
        <div class="">
          <explor />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import explor from "../explor-part/exproler.vue";
import profile from "../profile-part/profile.vue";
import state from "../add-part/state.vue";
import friend from "../friend-list/friend.vue";
import headerView from "../../components/navbar/NavBar.vue";
export default {
  components: {
    headerView,
    explor,
    profile,
    state,
    friend,
  },
};
</script>
<style scoped>
@import "./all-parts.css";
</style>
