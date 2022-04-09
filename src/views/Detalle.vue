<template>
<div>
    <div class="funko-header">
    <router-link to="/home">Home /</router-link>
    <router-link to="/Categorias"> Categorias /</router-link>
    <router-link to="/Categorias"> Categoria Especifica</router-link>
    </div>

    <b-container class="producto" >
    <b-row>
        <b-col>
        <b-card variant="info">
        <b><h2>Funko POP Harry Potter nº8</h2></b>
        <h3>$11.990</h3>
        </b-card>
        <b-card img-src="https://m.media-amazon.com/images/I/61q5FhBairL._AC_UX679_.jpg" class="Card-image"></b-card>
        <b-button variant="info">Agregar a favoritos</b-button>
        </b-col>

        <b-col>
        <b-card-group deck>
      <b-card border-variant="info" header="Contacto" header-bg-variant="info" header-text-variant="white" align="center">
        <b-card-text >Roberto Raggio</b-card-text><hr>
        <b-card-text>Ñuñoa, Región Metropolitana</b-card-text><hr>
        <b-card-text>+56962458214</b-card-text>
      </b-card>
    </b-card-group>

    <b-form deck class="mensaje">
      <b-card border-variant="info" header="Deja tu mensaje" header-bg-variant="info" header-text-variant="white" align="center">
    <b-form-input placeholder="Tu Nombre"></b-form-input><br>
    <b-form-input placeholder="Tu E-mail"></b-form-input><br>
    <b-form-input placeholder="Tu Telefono"></b-form-input><br>
    <b-form-textarea id="textarea-default" placeholder="Deja tu mensaje"></b-form-textarea>
    <b-button variant="info">Enviar tu mensaje</b-button>
    
    </b-card>
    </b-form>
    </b-col>
    </b-row>
    </b-container>
    
</div>

</template>

<script>
export default {}
</script>

<style>
.producto {
    margin-top: 80px;
    font-family:'Nunito';
}
.Card-image{
    width: 700px;
    padding: 40px;
}
.funko-header{
    margin-top: 50px;
    margin-left: 30px;
    font-family:'Nunito'
}
.mensaje{
    margin-top: 20px;
}
</style>
