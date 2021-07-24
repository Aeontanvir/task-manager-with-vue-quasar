<template>
  <q-page class="q-pa-md">
    <q-list
      bordered
      separator
    >
      <!-- <p
        v-for="(task , key) in tasks"
        :key="key"
      >
        {{key}} {{task}}
      </p> -->
      <task
        v-for="(task , key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      >
      </task>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageTodo',
  components: {
    task: require('components/Tasks/Task.vue').default
  },
  computed: {
    ...mapGetters({
      tasks: 'tasks/tasks'
    })
  },
  created () {

  }
}
</script>

<style scoped>
</style>
