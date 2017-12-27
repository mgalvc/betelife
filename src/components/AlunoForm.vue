<template>
	<el-container class="content">
		<el-header>
			<p id="header">Cadastro de Aluno</p>
		</el-header>

		<el-main class="main">
			<el-row>
				<el-col :span="4"><div class="filler">-</div></el-col>
				<el-col :span="16">
					<el-form :model="aluno" ref="aluno" class="form">
						<el-row :gutter="15">
							<el-col :span="16">
								<el-form-item
									label="Nome"
									prop="nome"
									:rules="{
										required: true, message: 'Nome não pode estar vazio'
									}"
								>
									<el-input v-model="aluno.nome"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item
								label="Data de nascimento"
								prop="nascimento"
								:rules="{
										required: true, message: 'Data não pode estar vazia'
									}"
								>
									<el-date-picker format="dd-MM-yyyy" type="date" v-model="aluno.nascimento" style="width: 100%;"></el-date-picker>
								</el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="15">
							<el-col :span="12">
								<el-form-item 
									label="Nome do pai"
									prop="pai"
									:rules="{
										required: true, message: 'Campo não pode estar vazio'
									}"
								>
									<el-input v-model="aluno.pai"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item 
									label="Nome da mãe"
									prop="mae"
									:rules="{
										required: true, message: 'Campo não pode estar vazio'
									}"
								>
									<el-input v-model="aluno.mae"></el-input>
								</el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="15">
							<el-col :span="8">
								<el-form-item 
									label="Telefone"
									prop="telefone"
									:rules="{
										required: true, message: 'Telefone não pode estar vazio'
									}"
								>
									<el-input v-model="aluno.telefone"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="16">
								<el-form-item 
									label="Endereço"
									prop="endereco"
									:rules="{
										required: true, message: 'Endereço não pode estar vazio'
									}"
								>
									<el-input v-model="aluno.endereco"></el-input>
								</el-form-item>
							</el-col>
						</el-row>

						<el-form-item 
							label="Mora com quem?"
							prop="mora_com"
							:rules="{
								required: true, message: 'Campo não pode estar vazio'
							}"
						>
							<el-input v-model="aluno.mora_com"></el-input>
						</el-form-item>

						<el-row :gutter="15">
							<el-col :span="8">
								<el-form-item 
								label="Responsável pela inscrição"
								>
									<el-select 
										v-model="aluno.responsavel" 
										style="width: 100%;"
										:clearable="false"
									>
										<el-option
											v-for="item in responsavel"
											:key="item"
											:label="item"
											:value="item"
										></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col :span="16">
								<el-form-item 
									label="RG do responsável"
									prop="responsavel_rg"
									:rules="{
										required: true, message: 'Campo não pode estar vazio'
									}"
								>
									<el-input v-model="aluno.responsavel_rg"></el-input>
								</el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="15">
							<el-col :span="12">
								<el-form-item 
									label="Profissão do pai"
									prop="pai_profissao"
									:rules="{
										required: true, message: 'Campo não pode estar vazio'
									}"
								>
									<el-input v-model="aluno.pai_profissao"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item 
									label="Profissão da mãe"
									prop="mae_profissao"
									:rules="{
										required: true, message: 'Campo não pode estar vazio'
									}"
								>
									<el-input v-model="aluno.mae_profissao"></el-input>
								</el-form-item>
							</el-col>
						</el-row>

						<el-row :gutter="15">
							<el-col :span="12">
								<el-form-item 
									label="Religião do pai"
									prop="pai_religiao"
									:rules="{
										required: true, message: 'Campo não pode estar vazio'
									}"
								>
									<el-input v-model="aluno.pai_religiao"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item 
									label="Religião da mãe"
									prop="mae_religiao"
									:rules="{
										required: true, message: 'Campo não pode estar vazio'
									}"
								>
									<el-input v-model="aluno.mae_religiao"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
				</el-col>
			</el-row>
		</el-main>
	</el-container>
</template>

<script>
export default {
	name: 'AlunoForm',
	data() {
		return {
			aluno: {},
			responsavel: ['Pai', 'Mãe']
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
