<template>
    <div id="app">
        <div>
            <el-menu class="menu" mode="horizontal">
                <el-menu-item index="1">
                    <router-link to="/">Home</router-link>
                </el-menu-item>
                
                <el-submenu index="2">
                    <template slot="title">Novo</template>
                    <el-menu-item index="2-1"> 
                        <router-link
                            :to="{
                                name: 'VoluntarioForm',
                                params: {
                                    volunteer: {},
                                    action: 'post'
                                }
                            }">
                            Voluntário
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        <router-link
                            :to="{
                                name: 'AlunoForm',
                                params: {
                                    student: {},
                                    action: 'post'
                                }
                            }">
                            Aluno
                        </router-link>
                    </el-menu-item>
                </el-submenu>

                <el-submenu index="3">
                    <template slot="title">Ver Todos</template>
                    <el-menu-item index="3-1">
                        <router-link to="/voluntarios">Voluntários</router-link>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                        <router-link to="/alunos">Alunos</router-link>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </div>

        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
    text-decoration: none;
}
</style>
