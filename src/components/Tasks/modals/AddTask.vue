<template>
  <q-card>
    <q-form @submit="submitForm">
      <q-card-section class="row">
        <div class="text-h6">Add Task</div>
        <q-space />
        <q-btn
          flat
          round
          dense
          icon="close"
          v-close-popup
        />
      </q-card-section>

      <q-card-section class="q-pt-none">

        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.name"
            label="Task Title"
            class="col"
            ref="name"
            autofocus
            :rules="[val => !!val || 'Field is required']"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.name"
                name="close"
                @click="taskToSubmit.name=''"
                class="cursor-pointer"
              ></q-icon>
            </template>
          </q-input>
        </div>
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.dueDate"
            label="Due Date"
            class="col"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.dueDate"
                name="close"
                @click="clearDueDate"
                class="cursor-pointer"
              ></q-icon>
              <q-icon
                name="event"
                class="cursor-pointer"
              >
                <q-popup-proxy>
                  <q-date v-model="taskToSubmit.dueDate">
                    <div class="row items-center justify-center">
                      <q-btn
                        v-close-popup
                        label="Close"
                        color="primary"
                        flat
                      />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div
          class="row q-mb-sm"
          v-if="taskToSubmit.dueDate"
        >

          <q-input
            outlined
            v-model="taskToSubmit.dueTime"
            label="Due Time"
            class="col"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.dueTime"
                name="close"
                @click="taskToSubmit.dueTime=''"
                class="cursor-pointer"
              ></q-icon>
              <q-icon
                name="access_time"
                class="cursor-pointer"
              >
                <q-popup-proxy>
                  <q-time v-model="taskToSubmit.dueTime">
                    <div class="row items-center justify-end">
                      <q-btn
                        v-close-popup
                        label="Close"
                        color="primary"
                        flat
                      />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="Save"
          color="primary"
          type="submit"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddTask',
  data () {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions({
      addTask: 'tasks/addTask'
    }),
    submitForm () {
      this.$refs.name.validate()
      if (!this.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    },
    clearDueDate () {
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
    }
  }
}
</script>

<style>
</style>
