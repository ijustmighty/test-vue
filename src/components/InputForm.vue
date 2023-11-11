<template>
  <div>
    <h2>Заполните данные</h2>
    <div class="data">
      <div class="first-colmn">
        <h3>ФИО</h3>
        <input type="text" v-model="firstName" placeholder="Имя" />
        <input type="text" v-model="lastName" placeholder="Фамилия" />
        <input type="text" v-model="middleName" placeholder="Отчество" />
      </div>

      <div class="second-colmn">
        <h3>Информация</h3>
        <input type="text" v-model="income" placeholder="Сколько, ты, зарабатываешь" />
        <input type="text" v-model="workplace" placeholder="Место работы" />
      </div>
    </div>
    <button @click="submitData">Отправить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      middleName: "",
      income: "",
      workplace: "",
    };
  },
  methods: {
    submitData() {
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        middleName: this.middleName,
        income: this.income,
        workplace: this.workplace,
      };
      // Сохраняем данные в хранилище
      this.$store.dispatch('saveFormData', data);
      // Переходим на страницу отображения данных
      this.$router.push({ name: "DisplayData" });
    },
  },
};
</script>
