import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const usuario=ref({nombre:"sin usuario",perfil:null});
  function login() {
    usuario.value={nombre:"john",perfil:"admin"};
    alert("ok");
  }
  return { usuario,login }
})
