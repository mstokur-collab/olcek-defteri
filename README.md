# Ölçek Defteri

## Hızlı kurulum (Firebase'siz, yalnızca telefonda)

Bu paketteki `index.html`, tüm ölçekleriniz, sınıf listeleriniz, rehberleriniz ve plan tarihlerinizle birlikte **şifreli** olarak gelir. Depo herkese açık olsa da şifreyi bilmeyen kimse içeriği okuyamaz.

1. GitHub'da yeni bir depo açın ve bu klasördeki **bütün dosyaları** yükleyin (aşağıdaki 2. bölüm).
2. **Settings → Pages** ile yayını açın (aşağıdaki 3. bölüm).
3. iPhone'da adresi **Safari** ile açın: `https://KULLANICI-ADINIZ.github.io/olcek-defteri/`
4. Önce paylaş düğmesi → **Ana Ekrana Ekle**.
5. Uygulamayı **ana ekrandaki simgeden** açın ve şifreyi girin. Ana ekrandaki uygulama Safari'den ayrı bir depolama kullanır; şifreyi Safari'de değil simgeden açtığınızda girin.

Bundan sonra eklediğiniz sınıflar, ölçekler ve işaretler telefonda saklanır. Uygulama iki haftada bir yedek almanızı hatırlatır: **Ayarlar → Yedeği indir**. Veriler yalnızca o telefonda durduğu için yedek önemlidir.

Bilgisayar ve telefonda aynı verileri görmek isterseniz aşağıdaki Firebase kurulumunu yapın ve yedeğinizi oraya yükleyin.

---

## Firebase kurulumu (verilerin cihazlar arasında eşitlenmesi için)

Bu rehber uygulamayı **GitHub Pages** üzerinde yayınlamanızı ve verilerinizi **Firebase**'de saklamanızı anlatır. Her şey ücretsizdir ve bir kez yapılır; yaklaşık 30 dakika sürer.

Ekranlarda İngilizce olan düğme ve menü adları **kalın** yazıldı; yanlarında parantez içinde Türkçe karşılıkları var.

---

## 0. Claude'daki verilerinizin yedeğini alın

1. Claude'daki Ölçek Defteri'ni açın.
2. **Ayarlar** sayfasında **Yedeği indir (JSON)** düğmesine basın.
3. İnen `olcek_defteri_yedek_….json` dosyasını saklayın. 6. adımda kullanacaksınız.

---

## 1. Firebase projesi oluşturun

1. https://console.firebase.google.com adresine Google hesabınızla girin.
2. **Create a project** (Proje oluştur) düğmesine basın.
   - Proje adı olarak `olcek-defteri` yazın, **Continue** (Devam).
   - **Google Analytics** sorusunda anahtarı kapatın, **Create project** (Projeyi oluştur).
3. **Giriş yöntemini açın:**
   - Sol menüde **Build** (Oluştur) → **Authentication** (Kimlik doğrulama) → **Get started** (Başla).
   - **Sign-in method** (Giriş yöntemi) sekmesinde **Email/Password** (E-posta/Şifre) satırını seçin.
   - İlk anahtarı **Enable** (Etkinleştir) yapın, **Save** (Kaydet).
4. **Veritabanını oluşturun:**
   - Sol menüde **Build** → **Firestore Database** → **Create database** (Veritabanı oluştur).
   - Konum (**Location**) olarak `europe-west1` gibi Avrupa'daki bir konumu seçin. Konum sonradan değiştirilemez.
   - **Start in production mode** (Üretim modunda başlat) seçeneğini işaretleyip **Create** (Oluştur).
5. **Güvenlik kurallarını yapıştırın:**
   - Firestore sayfasında **Rules** (Kurallar) sekmesini açın.
   - Oradaki metnin tamamını silin; bu klasördeki `firestore.rules` dosyasının içeriğini yapıştırın.
   - **Publish** (Yayınla) düğmesine basın.
   - Bu kurallar, her kullanıcının yalnızca kendi verisini görebilmesini sağlar.
6. **Web uygulaması kaydedin:**
   - Sol üstteki dişli simgesi → **Project settings** (Proje ayarları).
   - Aşağıda **Your apps** (Uygulamalarınız) bölümünde `</>` simgesine basın.
   - Takma ad olarak `olcek-defteri` yazın. **Firebase Hosting** kutusunu işaretlemeyin. **Register app** (Uygulamayı kaydet) düğmesine basın.
   - Ekranda `const firebaseConfig = { apiKey: "...", ... }` şeklinde bir kod çıkar. Süslü parantez içindeki altı satırı kopyalayın.
7. Bu klasördeki `firebase-config.js` dosyasını bir metin düzenleyiciyle açın (Not Defteri olur). `BURAYA…` yazan altı satırı kopyaladıklarınızla değiştirip kaydedin.

> `firebase-config.js` içindeki bilgiler şifre değildir; herkese açık depoda durmaları normaldir. Verilerinizi 5. adımdaki kurallar korur.

---

## 2. GitHub deposu oluşturun

1. https://github.com adresinde oturum açın.
2. Sağ üstteki **+** → **New repository** (Yeni depo).
3. **Repository name** (Depo adı): `olcek-defteri`. **Public** (Herkese açık) seçili kalsın; GitHub Pages ücretsiz hesapta yalnızca herkese açık depolarda çalışır. Depoda öğrenci verisi bulunmaz, yalnızca uygulamanın kodu durur.
4. **Create repository** (Depoyu oluştur).
5. Açılan sayfada **uploading an existing file** (var olan dosyaları yükle) bağlantısına tıklayın.
6. Bu klasördeki **bütün dosyaları** (klasörün kendisini değil, içindekileri) sayfaya sürükleyin.
7. En altta **Commit changes** (Değişiklikleri kaydet) düğmesine basın.

---

## 3. GitHub Pages'i açın

1. Deponuzda üstteki **Settings** (Ayarlar) sekmesine girin.
2. Sol menüde **Pages**.
3. **Source** (Kaynak): **Deploy from a branch** (Bir daldan yayınla).
4. **Branch** (Dal): `main` ve `/ (root)` seçip **Save** (Kaydet).
5. Bir iki dakika sonra sayfanın üstünde adresiniz görünür: `https://KULLANICI-ADINIZ.github.io/olcek-defteri/`

---

## 4. Adresinize Firebase'de izin verin

1. Firebase'de **Authentication** → **Settings** (Ayarlar) sekmesi → **Authorized domains** (Yetkili alan adları).
2. **Add domain** (Alan adı ekle) ile `KULLANICI-ADINIZ.github.io` yazın ve ekleyin.

Bu adım atlanırsa giriş yaparken hata alırsınız.

---

## 5. (İsteğe bağlı) Gemini anahtarı alın

PDF'den ölçek aktarma, beceri önerme ve dönüt taslakları için gereklidir. Anahtar olmadan uygulamanın geri kalanı normal çalışır.

1. https://aistudio.google.com adresine Google hesabınızla girin.
2. **Get API key** (API anahtarı al) → **Create API key** (API anahtarı oluştur).
3. Oluşan `AIza…` ile başlayan anahtarı kopyalayın.
4. Uygulamada **Ayarlar → Gemini API anahtarı** alanına yapıştırıp **Anahtarı test et** düğmesine basın.

> Anahtar yalnızca sizin Firebase hesabınızda saklanır, kodda ve yedek dosyasında yer almaz. Ücretsiz katmanın günlük bir kullanım sınırı vardır; bir öğretmenin kullanımı için genellikle yeterlidir.

---

## 6. İlk giriş ve verileri taşıma

1. Adresinizi açın. **Hesap oluştur** ile e-postanızı ve en az 6 karakterli bir şifre girin.
2. **Ayarlar → Yedekten yükle** ile 0. adımda indirdiğiniz JSON dosyasını seçin.
3. Ölçekleriniz, sınıflarınız, işaretleriniz, notlarınız, rehberleriniz ve plan tarihleriniz aktarılır. Sol alttaki durum yazısı "Buluta kaydedildi" olunca işlem tamamdır.
4. Her şeyi kontrol edene kadar Claude'daki sürümü silmeyin.

---

## 7. Telefona uygulama gibi kurun

- **iPhone:** Adresi Safari'de açın → paylaş düğmesi → **Ana Ekrana Ekle**.
- **Android:** Chrome'da açın → sağ üstteki üç nokta → **Ana ekrana ekle** ya da **Uygulamayı yükle**.

Artık uygulama simgeden açılır. İnternet yokken de işaret girebilirsiniz; bağlantı gelince veriler kendiliğinden eşitlenir.

---

## Güncelleme

Yeni bir sürüm aldığınızda deponuzda **Add file** (Dosya ekle) → **Upload files** (Dosya yükle) ile değişen dosyaları yükleyin. Yalnızca `firebase-config.js` dosyasının üzerine yazmayın, çünkü içinde sizin bilgileriniz var. Birkaç dakika içinde site güncellenir; telefonda uygulamayı kapatıp açmanız yeterlidir.

## Öğrenci verileri hakkında

Öğrenci adları ve değerlendirmeler Google'ın Firebase sunucularında, yalnızca sizin hesabınızın erişebildiği bir alanda saklanır. Kişisel verilerin korunması açısından okulunuzun bu konuda bir yönergesi olup olmadığını idareye danışmanızı öneririz.
