<template>
    <div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-7 pt-3 info">
                <h2 class="px-3"> Información de Contacto</h2>
                <div class="form-floating pt-4 px-3 pb-1">
                <p>Contacto</p>
                <input type="email" class="form-control" id="floatingInput" placeholder="rraggio@sbpay.cl">
                </div>
                <div class="form-floaing mb-3 pb-3 px-3 pt-1">
                    <p>Enviar a </p>
                <input type="email" class="form-control" id="floatingInput" placeholder="Ronda 8354, Las Condes, Santiago, Chile">
                </div>

                <h2 class="px-3">Pago</h2>
                <p class="px-3">Todas las transacciones son seguras y están encriptadas.</p>
                <img class="img-fluid funko-pago px-3 mb-3 pb-3" src="@/assets/img/mercadopago.png" />

                <h2 class="px-3">Dirección de facturación</h2>
                <p class="px-3">Selecciona la dirección que coincida con tu tarjeta o forma de pago.</p>
                <img class="img-fluid funko-facturacion px-3 mb-3 pb-3" src="@/assets/img/facturación.png" />
                <br>
                <button type="button" class="btn btn-primary btn-lg ml-3 mb-5">Continuar con el pago</button>
            </div>
            <div class="col-lg-5 pt-3 pedido">
                <h2> Producto</h2>
            </div>
        </div>
        
    </div>
    </div>
</template>