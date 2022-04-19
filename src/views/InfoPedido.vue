<template>
    <div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-7 pt-3 info">
                <h2> Información de Contacto</h2>
                <div class="form-floating pt-4 px-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="Correo Electrónico">
                </div>
                <div class="container form-floaing mb-3 pt-1 pb-1 px-3">
                    <div class="row">
                        <div class="col-1">
                        <button type="button" class="btn btn-outline-primary btn-sm"></button>
                        </div>
                        <div class="col-11">
                        <p>Enviarme novedades y ofertas por correo electrónico</p>
                        </div>
                    </div>
                </div>

                <h2> Dirección de envío</h2>
                <br>
                <div class="form-floaing mb-3 pt-3 px-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Nombre y Apellido">
                </div>
                <div class="form-floaing mb-3 pt-1 px-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Dirección de destino">
                </div>
                <div class="form-floaing mb-3 pt-1 pb-1 px-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Departamento, local, etc">
                </div>
                <div class="form-floaing mb-3 pt-1 pb-1 px-3">
                <input type="Number" class="form-control" id="floatingInput" placeholder="Codigo Postal">
                </div>
                <div class="form-floaing mb-3 pt-1 pb-1 px-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Comuna/Ciudad y Región">
                </div>
                <div class="form-floaing pt-1 px-3">
                <input type="Number" class="form-control" id="floatingInput" placeholder="Teléfono">
                </div>
                <div class="container form-floaing mb-3 pt-1 pb-1 px-3">
                    <div class="row">
                        <div class="col-1">
                        <button type="button" class="btn btn-outline-primary btn-sm"></button>
                        </div>
                        <div class="col-11">
                        <p>Guardar mi información y consultar más rápidamente la próxima vez</p>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-primary btn-lg ml-3 mb-5">Continuar Continuar con el Envío</button>
                
            </div>
            <div class="col-lg-5 pt-3 pedido">
                <h2> Producto</h2>
            </div>
        </div>
        
    </div>
    </div>
</template>

<style>

.pedido{
    background-color: black;
    height: 100%;
    color: white;
}
.boton-newsletter{
    width: 2%;
}

.region {
    size:100;
}
</style>