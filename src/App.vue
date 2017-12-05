<template>
    <div id="app">
        <div class="hello">
            <el-menu class="el-menu-demo" mode="horizontal">
                <el-menu-item index="1">Home</el-menu-item>
                
                <el-submenu index="2">
                    <template slot="title">Novo</template>
                    <el-menu-item index="2-1"> 
                        <router-link to="/novo-voluntario">Voluntário</router-link>
                    </el-menu-item>
                    <el-menu-item index="2-2">Aluno</el-menu-item>
                </el-submenu>

                <el-submenu index="3">
                    <template slot="title">Ver Todos</template>
                    <el-menu-item index="3-1">Voluntários</el-menu-item>
                    <el-menu-item index="3-2">Alunos</el-menu-item>
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
