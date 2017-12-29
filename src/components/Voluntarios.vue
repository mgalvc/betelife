<template>
	<el-container class="content">
		<el-header>
			<p id="header"><b>Voluntários Cadastrados</b></p>
		</el-header>

		<el-main class="main">
			<el-row>
				<el-col :span="4"><div class="filler">-</div></el-col>
				<el-col :span="16">
					<el-table
						stripe
						class="table"
						height="500"
						:data="voluntarios">
						<el-table-column
							prop="nome"
							label="Nome">
						</el-table-column>
						<el-table-column
							prop="idade"
							label="Idade">
						</el-table-column>
						<el-table-column
							prop="telefone"
							label="Telefone">
						</el-table-column>
						<el-table-column 
							width="150"
							label="Ações">
							<template slot-scope="scope">
								<el-button plain type="primary" icon="el-icon-view"></el-button>
								<el-button plain type="primary" icon="el-icon-printer"></el-button>
							</template>
						</el-table-column>
					</el-table>
				</el-col>
			</el-row>
		</el-main>
	</el-container>
</template>

<script>
import { HTTP } from './http-common'

export default {
	name: 'Alunos',
	data() {
		return {
			voluntarios: []
		}
	},
	methods: {

	},
	created: function() {
		HTTP.get('/volunteers')
			.then(response => {
				this.voluntarios = response.data.res
			})
			.catch(e => {
				console.log(e)
			})
	}
}	
</script>
<style>
.table {
	text-align: left;
}

.content {
    background-color: white;
}

#header {
	font-size: 1.5em;
	color: #5A5E66;
	font-family: "Helvetica Neue", Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑";
}

.filler {
	color: white;
}
</style>
