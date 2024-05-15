import { FormControl } from '@angular/forms';
export class DateFormControl extends FormControl {
  override setValue(value: string | null, options: any) {
    //override edip value yu aldık tekrar bunu manipule edip döndermek için super i kullanıyoruz
    //emitModelToViewChange: true ile değerin değiştirilerek gönderilmesini sağlarız
    //emitModelToViewChange: When true or not supplied (the default), each change triggers an onChange event to update the view.
    //https://angular.io/api/forms/FormControl#setValue
    //https://ultimatecourses.com/blog/angular-2-form-controls-patch-value-set-value
    //...options diğer options lar kalsın diye
    // console.log(value);
    // super.setValue(value + '+',options);
    // super.setValue(value + '+',{...options,emitModelToViewChange: true});

    if (!value) {
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }
    if (value?.match(/[^0-9|\/]/gi)) {
      //rakam kontrol
      //this.value şimdiyekadar olan değer value ise inputtan gönderilen değer örenğin date e sayı girişi yaparken bu şartlarda harfe basarsak şimdiye kadar olandeğer hala null olduğundan(burdan value olarak göndermediğimizden ) input ekranı boşaltılır bunun için altta super.setValue(value, { ...options, emitModelToViewChange: true }); olarak ayarlıyoruz
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.length === 2 && this.value.length === 3) {
      // slash ı koyduğunda value nun slash ı almaması için this.value yu es geçip tekrar value ya set ediyoruz
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
