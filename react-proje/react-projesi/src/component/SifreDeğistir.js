import { sifreGuncelle} from '../functions/SignOut'
import Sidebar from './Sidebar';
function SifreDegistir() {
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <Sidebar
                        form_to="/portal/BasvuruFormu"
                        gor_to="/portal/BasvuruGoruntule" />
                </div>
                <div className="col-8">
                    
                            <div class="row text-dark my-5 p-5">
                                <div class="bg-secondary col-8 rounded border border p-5 ">

                                    <form>
                                        <i className="fa-solid fa-pen-nib fa-4x"></i>
                                        <h1 className="h3 mb-3 fw-normal">Şifre Değiştir</h1>

                                        <div className="form-floating py-2">
                                            <input type="password" className="form-control" id="oldpass" placeholder="Eski Şifrenizi Giriniz " />
                                            <label for="oldpass">Eski Şifre</label>
                                        </div>
                                        <div className="form-floating py-2">
                                            <input type="password" className="form-control" id="newpass" placeholder="Şifrenizi Giriniz" />
                                            <label for="newpass">Şifrenizi Giriniz</label>
                                        </div>
                                        <div className="form-floating py-2">
                                            <input type="password" className="form-control" id="repass" placeholder=" Şifrenizi Tekrar Giriniz" />
                                            <label for="repass">Tekrar Şifrenizi Giriniz</label>
                                        </div>


                                    </form>
                                    <input type="submit" className='btn btn-primary' onClick={() => sifreGuncelle()} />
                                    <p id="sonuc"></p>

                                </div>
                            </div>

                    
                </div>
            </div>

        </>
    )
}
export default SifreDegistir;

