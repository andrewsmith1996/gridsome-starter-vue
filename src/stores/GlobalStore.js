import Vue from "vue";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";


@Module({
  namespaced: true
})
export default class GlobalStore extends VuexModule {}
