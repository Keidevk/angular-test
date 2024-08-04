import { Component, Input } from "@angular/core";

@Component({
  selector:'bins-component',
  standalone:true,
  imports: [],
  template:`
  @defer{
  <div class="flex flex-wrap sm:flex-nowrap justify-center h-[80vh] mt-8" >
    <div>
      <img src="/marron.jpeg" alt="bin brown" class="m-auto w-40" (click)="toggleImageSizeBrown()"/>
      <div [style.opacity]="isImageEnlargedbrow ? 1 : 0" class="p-4 transition ease-in-out duration-300 transform">
        <h2 class="text-2xl font-bold text-center">Papelera de Cartón</h2>
        <ul>
            <li>Características:
                <ul>
                    <li>1.Fabricada con cartón reciclado o material biodegradable.</li>
                    <li>2.Ligera y fácil de transportar.</li>
                    <li>3.Diseño plegable o encajable.</li>
                    <li>4.Apta para recoger papel, cartón y envases de cartón.</li>
                </ul>
            </li>
            <li>Color: Suelen ser marrones o grises.</li>
        </ul>
      </div>
    </div>
    <div>
      <img src="/verde.jpeg" alt="bin brown" class="m-auto w-40" (click)="toggleImageSizeGreen()"/>
      <div
        [style.opacity]="isImageEnlargedGreen ? 1 : 0"
        class="p-4 transition ease-in-out duration-300 transform hi">
        <h2 class="text-2xl font-bold text-center">Papelera de Plástico</h2>
        <ul>
          <li>Características:
              <ul>
                  <li>1.Hecha de plástico resistente.</li>
                  <li>2.Fácil de limpiar y mantener.</li>
                  <li>3.Diseño con tapa para evitar olores.</li>
                  <li>4.Adecuada para recoger envases de plástico y botellas.</li>
              </ul>
          </li>
          <li>Color: Comúnmente azules o verdes.</li>
        </ul>
      </div>
    </div>
    <div>
      <img src="/gris.jpeg" alt="bin brown" class="m-auto w-40" (click)="toggleImageSizeGray()"/>
      <div [style.opacity]="isImageEnlargedGray ? 1 : 0" class="p-4 transition ease-in-out duration-300 transform">
        <h2 class="text-2xl font-bold text-center">Papelera de Basura General</h2>
        <ul>
            <li>Características:
                <ul>
                    <li>1.Diseñada para residuos no reciclables.</li>
                    <li>2.Mayor capacidad que las papeleras específicas.</li>
                    <li>3.Puede tener pedal o tapa abatible.</li>
                    <li>4.Apta para desechar restos de comida, pañales, etc.</li>
                </ul>
            </li>
            <li>Color: Suelen ser grises o negras.</li>
        </ul>
      </div>
    </div>
  </div>
}@placeholder {
  <div class="flex items-center justify-center h-[80vh] mt-8">
    <h1 class="text-5xl sm:text-9xl animate-pulse">Cargando...</h1>
  </div>
}
  `,
  // templateUrl:'../assets/binsinfo.html'
})

export class BinsComponent{
  isImageEnlargedbrow = false;
  isImageEnlargedGreen = false;
  isImageEnlargedGray = false;
  toggleImageSizeBrown() {
    this.isImageEnlargedbrow = !this.isImageEnlargedbrow;
  }
  toggleImageSizeGreen() {
    this.isImageEnlargedGreen = !this.isImageEnlargedGreen;
  }
  toggleImageSizeGray() {
    this.isImageEnlargedGray = !this.isImageEnlargedGray;
  }
}

