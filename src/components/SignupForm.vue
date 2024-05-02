<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'designer',
      tempSkill: '',
      terms: false,
      names: ['mario'],
      skills: []
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === ',' && this.tempSkill) {
        let newSkill = this.tempSkill.replace(/,/g, '');
        if (!this.skills.includes(newSkill)) {
          this.skills.push(newSkill);
        }
        this.tempSkill = '';
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter(item => {
        return item !== skill;
      })
    }
  }
};
</script>

<template>
  <form>
    <label for="email">
      email:
      <input name="email" type="email" v-model="email" required>
    </label>
    <br>
    <label for="password">
      password:
      <input name="password" type="password" v-model="password" required>
    </label>
    <br>
    <label for="role">
      Role:
      <select v-model="role">
        <option value="developer">Web developer</option>
        <option value="designer">Web designer</option>
      </select>
    </label>
    <br>
    <label for="skills">
      Skills:
      <input type="text" v-model="tempSkill" @keyup="addSkill">
    </label>
    <br>
    <ul>
      <li v-for="skill in skills" :key="skill" class="pill" @click="deleteSkill(skill)">{{ skill }}</li>
    </ul>
    <div class="terms">
      <input name="terms" type="checkbox" v-model="terms" required>
      <label for="terms">Accept terms and conditions</label>
    </div>
    <div>
      <input type="checkbox" v-model="names" value="shaun">
      <label for="">Shaun</label>
    </div>
    <div>
      <input type="checkbox" v-model="names" value="yoshi">
      <label for="">Yoshi</label>
    </div>
    <div>
      <input type="checkbox" v-model="names" value="mario">
      <label for="">Mario</label>
    </div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
  <p>Names: {{ names }}</p>
</template>

<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid;
  color: #555;
}

select {
  background: #fff;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

ul {
  display: flex;
  justify-content: flex-start;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
</style>