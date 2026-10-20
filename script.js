/* دستیار بیزاد - آموزش روزانه انگلیسی، نسخه آفلاین */
(() => {
"use strict";
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const STORAGE_KEY = "bizad_english_v1";
const DAY_SIZE = 20;
const TOTAL_DAYS = 30;

/* واژه‌های پایه. برنامه ۳۰ روزه از این فهرست به‌صورت منظم و بدون تکرار تا پایان فهرست استفاده می‌کند. */
const rawWords = `
hello|سلام
goodbye|خداحافظ
please|لطفاً
thanks|ممنون
sorry|متأسفم
yes|بله
no|نه
maybe|شاید
welcome|خوش آمدید
excuse|ببخشید
name|نام
first|اول
last|آخر
friend|دوست
family|خانواده
mother|مادر
father|پدر
sister|خواهر
brother|برادر
wife|همسر
husband|شوهر
child|کودک
people|مردم
person|شخص
man|مرد
woman|زن
boy|پسر
girl|دختر
baby|نوزاد
home|خانه
house|خانه
room|اتاق
door|در
window|پنجره
wall|دیوار
floor|کف
table|میز
chair|صندلی
bed|تخت
key|کلید
phone|تلفن
computer|رایانه
screen|صفحه‌نمایش
book|کتاب
pen|خودکار
paper|کاغذ
bag|کیف
box|جعبه
bottle|بطری
cup|فنجان
water|آب
tea|چای
coffee|قهوه
milk|شیر
bread|نان
rice|برنج
egg|تخم‌مرغ
cheese|پنیر
meat|گوشت
chicken|مرغ
fish|ماهی
apple|سیب
banana|موز
orange|پرتقال
food|غذا
fruit|میوه
breakfast|صبحانه
lunch|ناهار
dinner|شام
restaurant|رستوران
menu|منو
price|قیمت
money|پول
card|کارت
cash|نقد
shop|مغازه
store|فروشگاه
market|بازار
buy|خریدن
sell|فروختن
pay|پرداخت کردن
work|کار
job|شغل
office|اداره
company|شرکت
boss|رئیس
worker|کارگر
customer|مشتری
doctor|پزشک
nurse|پرستار
patient|بیمار
hospital|بیمارستان
medicine|دارو
health|سلامتی
machine|دستگاه
robot|ربات
tool|ابزار
repair|تعمیر کردن
problem|مشکل
help|کمک
question|سؤال
answer|پاسخ
time|زمان
day|روز
week|هفته
month|ماه
year|سال
today|امروز
tomorrow|فردا
yesterday|دیروز
morning|صبح
afternoon|بعدازظهر
evening|عصر
night|شب
hour|ساعت
minute|دقیقه
early|زود
late|دیر
now|اکنون
later|بعداً
always|همیشه
usually|معمولاً
sometimes|گاهی
never|هرگز
often|اغلب
here|اینجا
there|آنجا
where|کجا
when|چه‌وقت
why|چرا
what|چه
who|چه‌کسی
which|کدام
how|چطور
this|این
that|آن
these|این‌ها
those|آن‌ها
I|من
you|تو / شما
he|او (مرد)
she|او (زن)
we|ما
they|آن‌ها
it|آن
my|مال من
your|مال تو / شما
his|مال او
her|مال او
our|مال ما
their|مال آن‌ها
me|من را
us|ما را
them|آن‌ها را
and|و
or|یا
but|اما
because|چون
if|اگر
with|با
without|بدون
for|برای
from|از
to|به
in|در
on|روی
under|زیر
near|نزدیک
behind|پشت
between|بین
before|قبل
after|بعد
about|درباره
at|در
of|از / ـِ
can|توانستن
could|می‌توانست
will|خواهد
would|می‌خواست / می‌شد
should|باید
must|باید
do|انجام دادن
make|ساختن
go|رفتن
come|آمدن
get|گرفتن
give|دادن
take|برداشتن
put|گذاشتن
bring|آوردن
keep|نگه داشتن
find|پیدا کردن
look|نگاه کردن
see|دیدن
watch|تماشا کردن
hear|شنیدن
listen|گوش دادن
speak|صحبت کردن
talk|حرف زدن
say|گفتن
tell|گفتن / تعریف کردن
ask|پرسیدن
know|دانستن
think|فکر کردن
understand|فهمیدن
learn|یاد گرفتن
teach|آموزش دادن
read|خواندن
write|نوشتن
spell|هجی کردن
repeat|تکرار کردن
remember|به یاد آوردن
forget|فراموش کردن
study|مطالعه کردن
practice|تمرین کردن
try|تلاش کردن
start|شروع کردن
finish|تمام کردن
stop|متوقف کردن
wait|صبر کردن
open|باز کردن
close|بستن
turn|چرخاندن
move|حرکت کردن
walk|راه رفتن
run|دویدن
sit|نشستن
stand|ایستادن
sleep|خوابیدن
wake|بیدار شدن
live|زندگی کردن
like|دوست داشتن
love|عاشق بودن
want|خواستن
need|نیاز داشتن
prefer|ترجیح دادن
feel|احساس کردن
think|فکر کردن
hope|امیدوار بودن
enjoy|لذت بردن
eat|خوردن
drink|نوشیدن
cook|آشپزی کردن
wash|شستن
clean|تمیز کردن
drive|رانندگی کردن
travel|سفر کردن
stay|ماندن
leave|ترک کردن
arrive|رسیدن
visit|دیدار کردن
call|تماس گرفتن
send|فرستادن
show|نشان دادن
use|استفاده کردن
change|تغییر دادن
choose|انتخاب کردن
check|بررسی کردن
count|شمردن
add|اضافه کردن
remove|برداشتن
save|ذخیره کردن
delete|حذف کردن
work|کار کردن
play|بازی کردن
meet|ملاقات کردن
plan|برنامه‌ریزی کردن
happen|اتفاق افتادن
follow|دنبال کردن
win|برنده شدن
lose|باختن / گم کردن
pay|پرداخت کردن
cost|هزینه داشتن
order|سفارش دادن
book|رزرو کردن
wear|پوشیدن
carry|حمل کردن
cut|بریدن
break|شکستن
fix|درست کردن
build|ساختن
grow|رشد کردن
fall|افتادن
hold|نگه داشتن
pass|عبور کردن
reach|رسیدن
return|برگشتن
happen|رخ دادن
easy|آسان
hard|سخت
difficult|دشوار
important|مهم
different|متفاوت
same|یکسان
right|درست / راست
wrong|اشتباه
good|خوب
bad|بد
great|عالی
small|کوچک
big|بزرگ
large|بزرگ
long|بلند / طولانی
short|کوتاه
high|بالا
low|پایین
old|قدیمی / پیر
young|جوان
new|جدید
clean|تمیز
dirty|کثیف
hot|داغ
cold|سرد
warm|گرم
cool|خنک
fast|سریع
slow|آهسته
early|زود
late|دیر
busy|مشغول
free|آزاد / رایگان
ready|آماده
tired|خسته
hungry|گرسنه
thirsty|تشنه
happy|خوشحال
sad|ناراحت
angry|عصبانی
afraid|ترسیده
worried|نگران
fine|خوب
sick|بیمار
strong|قوی
weak|ضعیف
beautiful|زیبا
beautiful|زیبا
nice|خوب / دلپذیر
kind|مهربان
polite|مؤدب
quiet|ساکت
loud|پُر سر و صدا
safe|امن
dangerous|خطرناک
careful|مراقب
carefully|با دقت
really|واقعاً
very|خیلی
too|بیش از حد / هم
enough|به‌اندازه کافی
almost|تقریباً
only|فقط
also|همچنین
together|با هم
again|دوباره
already|از قبل
soon|به‌زودی
maybe|شاید
probably|احتمالاً
quickly|به‌سرعت
slowly|آهسته
well|خوب
better|بهتر
best|بهترین
more|بیشتر
most|بیشترین
less|کمتر
least|کمترین
all|همه
some|مقداری
any|هر / هیچ
many|بسیاری
much|زیاد
few|تعداد کم
little|کم / کوچک
enough|کافی
every|هر
each|هرکدام
another|یکی دیگر
other|دیگر
both|هر دو
first|اول
second|دوم
third|سوم
last|آخر
next|بعدی
left|چپ
right|راست
up|بالا
down|پایین
inside|داخل
outside|بیرون
front|جلو
back|پشت
north|شمال
south|جنوب
east|شرق
west|غرب
city|شهر
town|شهر کوچک
village|روستا
country|کشور
street|خیابان
road|جاده
address|نشانی
building|ساختمان
floor|طبقه
station|ایستگاه
airport|فرودگاه
hotel|هتل
room|اتاق
ticket|بلیت
passport|گذرنامه
trip|سفر
map|نقشه
car|ماشین
bus|اتوبوس
train|قطار
plane|هواپیما
taxi|تاکسی
bicycle|دوچرخه
traffic|ترافیک
light|چراغ / نور
left|چپ
right|راست
weather|آب‌وهوا
sun|خورشید
rain|باران
snow|برف
wind|باد
cloud|ابر
sky|آسمان
tree|درخت
flower|گل
animal|حیوان
dog|سگ
cat|گربه
bird|پرنده
horse|اسب
head|سر
face|صورت
hair|مو
eye|چشم
ear|گوش
nose|بینی
mouth|دهان
tooth|دندان
neck|گردن
shoulder|شانه
arm|بازو
hand|دست
finger|انگشت
leg|پا
foot|پا
heart|قلب
body|بدن
back|کمر / پشت
stomach|معده
pain|درد
fever|تب
medicine|دارو
appointment|قرار ملاقات
clothes|لباس
shirt|پیراهن
pants|شلوار
shoes|کفش
coat|کت
hat|کلاه
color|رنگ
black|سیاه
white|سفید
red|قرمز
blue|آبی
green|سبز
yellow|زرد
brown|قهوه‌ای
gray|خاکستری
dark|تیره
light|روشن
number|عدد
one|یک
two|دو
three|سه
four|چهار
five|پنج
six|شش
seven|هفت
eight|هشت
nine|نه
ten|ده
twenty|بیست
hundred|صد
thousand|هزار
zero|صفر
half|نصف
many|زیاد
date|تاریخ
calendar|تقویم
birthday|تولد
holiday|تعطیلات
weekend|آخر هفته
Monday|دوشنبه
Tuesday|سه‌شنبه
Wednesday|چهارشنبه
Thursday|پنج‌شنبه
Friday|جمعه
Saturday|شنبه
Sunday|یکشنبه
January|ژانویه
February|فوریه
March|مارس
April|آوریل
May|مه
June|ژوئن
July|ژوئیه
August|اوت
September|سپتامبر
October|اکتبر
November|نوامبر
December|دسامبر
music|موسیقی
song|آهنگ
movie|فیلم
game|بازی
sport|ورزش
gym|باشگاه
exercise|ورزش / تمرین
football|فوتبال
team|تیم
player|بازیکن
news|خبر
story|داستان
picture|عکس
photo|عکس
video|ویدئو
internet|اینترنت
website|وب‌سایت
email|ایمیل
message|پیام
password|رمز عبور
account|حساب کاربری
file|فایل
folder|پوشه
data|داده
information|اطلاعات
idea|ایده
reason|دلیل
example|مثال
result|نتیجه
mistake|اشتباه
success|موفقیت
failure|شکست
chance|فرصت
choice|انتخاب
decision|تصمیم
goal|هدف
dream|رویا
future|آینده
past|گذشته
present|حال
life|زندگی
world|جهان
language|زبان
English|زبان انگلیسی
Persian|زبان فارسی
word|کلمه
sentence|جمله
meaning|معنی
pronunciation|تلفظ
sound|صدا
voice|صدا
accent|لهجه
grammar|دستور زبان
lesson|درس
class|کلاس
school|مدرسه
student|دانش‌آموز / دانشجو
teacher|معلم
test|آزمون
score|امتیاز
level|سطح
beginner|مبتدی
improve|بهتر کردن
progress|پیشرفت
skill|مهارت
memory|حافظه
attention|توجه
focus|تمرکز
energy|انرژی
habit|عادت
routine|روال روزانه
task|وظیفه
break|استراحت
rest|استراحت
coffee|قهوه
tea|چای
sugar|شکر
salt|نمک
pepper|فلفل
oil|روغن
soup|سوپ
salad|سالاد
sandwich|ساندویچ
potato|سیب‌زمینی
tomato|گوجه‌فرنگی
onion|پیاز
carrot|هویج
lemon|لیمو
grape|انگور
watermelon|هندوانه
sweet|شیرین
sour|ترش
bitter|تلخ
salty|شور
fresh|تازه
delicious|خوشمزه
hungry|گرسنه
order|سفارش
bill|صورت‌حساب
tip|انعام
fork|چنگال
spoon|قاشق
knife|چاقو
plate|بشقاب
bowl|کاسه
napkin|دستمال سفره
kitchen|آشپزخانه
bathroom|حمام / سرویس
shower|دوش
soap|صابون
towel|حوله
mirror|آینه
light|چراغ
electricity|برق
power|قدرت / برق
battery|باتری
charger|شارژر
cable|کابل
device|دستگاه
engine|موتور
screen|صفحه‌نمایش
button|دکمه
keyboard|صفحه‌کلید
mouse|ماوس
printer|چاپگر
camera|دوربین
speaker|بلندگو
headphones|هدفون
network|شبکه
connection|اتصال
signal|سیگنال
error|خطا
update|به‌روزرسانی
install|نصب کردن
download|دانلود کردن
upload|بارگذاری کردن
backup|نسخه پشتیبان
restore|بازیابی کردن
settings|تنظیمات
option|گزینه
select|انتخاب کردن
click|کلیک کردن
tap|ضربه زدن
type|تایپ کردن
search|جست‌وجو کردن
share|به‌اشتراک گذاشتن
protect|محافظت کردن
private|خصوصی
public|عمومی
available|در دسترس
possible|ممکن
impossible|غیرممکن
correct|درست
incorrect|نادرست
true|درست
false|غلط
complete|کامل
empty|خالی
full|پر
broken|خراب
working|در حال کار
closed|بسته
available|موجود
missing|مفقود
lost|گم‌شده
found|پیداشده
cheap|ارزان
expensive|گران
rich|ثروتمند
poor|فقیر
strong|قوی
weak|ضعیف
simple|ساده
clear|واضح
dark|تاریک
bright|روشن
soft|نرم
hard|سخت
heavy|سنگین
lightweight|سبک
thick|ضخیم
thin|نازک
wide|عریض
narrow|باریک
deep|عمیق
shallow|کم‌عمق
round|گرد
straight|صاف
flat|تخت
sharp|تیز
smooth|صاف
rough|زبر
wet|خیس
dry|خشک
dirty|کثیف
beautiful|زیبا
ugly|زشت
funny|خنده‌دار
serious|جدی
interesting|جالب
boring|خسته‌کننده
exciting|هیجان‌انگیز
surprised|متعجب
surprising|تعجب‌آور
friendly|دوستانه
helpful|مفید
useful|کاربردی
useless|بی‌فایده
necessary|ضروری
ready|آماده
sure|مطمئن
certain|قطعی
possible|ممکن
careful|محتاط
honest|صادق
patient|صبور
popular|محبوب
famous|معروف
special|خاص
normal|عادی
strange|عجیب
common|رایج
local|محلی
foreign|خارجی
international|بین‌المللی
personal|شخصی
professional|حرفه‌ای
medical|پزشکی
technical|فنی
digital|دیجیتال
online|آنلاین
offline|آفلاین
modern|مدرن
traditional|سنتی
natural|طبیعی
real|واقعی
exact|دقیق
basic|پایه
advanced|پیشرفته
daily|روزانه
weekly|هفتگی
monthly|ماهانه
yearly|سالانه
`;
const vocabAll = rawWords.trim().split(/\n/).map((line,i)=> {
  const p=line.split("|"); return {id:i, en:p[0].trim(), fa:p.slice(1).join("|").trim()};
});
const uniqueWords = [...new Map(vocabAll.map(w=>[w.en.toLowerCase(),w])).values()];
/* تکمیل خودکار بانک تا ۶۰۰ مدخل آموزشی؛ واژه‌ها بر اساس مجموعه موضوعی چیده شده‌اند و تکراری‌ها حذف می‌شوند. */
const extraWords = [
["ability","توانایی"],["able","قادر"],["accept","پذیرفتن"],["accident","تصادف"],["according","طبق"],["achieve","به‌دست آوردن"],["activity","فعالیت"],["actually","درواقع"],["advice","توصیه"],["affect","تأثیر گذاشتن"],["agree","موافق بودن"],["air","هوا"],["alone","تنها"],["although","اگرچه"],["among","در میان"],["amount","مقدار"],["ancient","باستانی"],["appear","ظاهر شدن"],["area","منطقه"],["argue","بحث کردن"],["arrange","مرتب کردن"],["article","مقاله"],["artist","هنرمند"],["asleep","خواب"],["attention","توجه"],["average","میانگین"],["avoid","اجتناب کردن"],["awake","بیدار"],["award","جایزه"],["balance","تعادل"],["basic","پایه"],["behavior","رفتار"],["believe","باور داشتن"],["belong","تعلق داشتن"],["benefit","فایده"],["beyond","فراتر از"],["blood","خون"],["board","تخته"],["borrow","قرض گرفتن"],["bottom","پایین"],["brain","مغز"],["bridge","پل"],["bright","درخشان"],["business","کسب‌وکار"],["calm","آرام"],["capital","پایتخت"],["career","مسیر شغلی"],["cause","علت"],["center","مرکز"],["certain","مطمئن"],["challenge","چالش"],["character","شخصیت"],["choice","انتخاب"],["climate","اقلیم"],["collect","جمع‌آوری کردن"],["comfortable","راحت"],["compare","مقایسه کردن"],["complete","کامل کردن"],["condition","وضعیت"],["consider","در نظر گرفتن"],["contain","شامل بودن"],["continue","ادامه دادن"],["control","کنترل کردن"],["conversation","گفت‌وگو"],["corner","گوشه"],["culture","فرهنگ"],["customer","مشتری"],["daily","روزانه"],["danger","خطر"],["deal","معامله"],["degree","درجه"],["depend","وابسته بودن"],["describe","توصیف کردن"],["design","طراحی کردن"],["develop","توسعه دادن"],["difference","تفاوت"],["direction","جهت"],["discover","کشف کردن"],["discuss","بحث کردن"],["distance","فاصله"],["divide","تقسیم کردن"],["double","دو برابر"],["during","در طول"],["education","آموزش"],["effect","اثر"],["effort","تلاش"],["either","هرکدام از دو"],["electronic","الکترونیکی"],["employee","کارمند"],["employer","کارفرما"],["environment","محیط"],["especially","به‌خصوص"],["event","رویداد"],["exactly","دقیقاً"],["excellent","عالی"],["experience","تجربه"],["experiment","آزمایش"],["explain","توضیح دادن"],["express","بیان کردن"],["fact","واقعیت"],["fair","منصفانه"],["familiar","آشنا"],["favorite","موردعلاقه"],["feature","ویژگی"],["field","زمینه"],["figure","شکل / رقم"],["fill","پر کردن"],["final","نهایی"],["finish","پایان دادن"],["flight","پرواز"],["focus","تمرکز کردن"],["foreign","خارجی"],["form","فرم"],["forward","به جلو"],["fresh","تازه"],["function","عملکرد"],["general","عمومی"],["government","دولت"],["grade","نمره"],["ground","زمین"],["guess","حدس زدن"],["guide","راهنما"],["handle","رسیدگی کردن"],["healthy","سالم"],["heavy","سنگین"],["history","تاریخ"],["however","بااین‌حال"],["identify","شناسایی کردن"],["imagine","تصور کردن"],["increase","افزایش دادن"],["industry","صنعت"],["instead","در عوض"],["introduce","معرفی کردن"],["issue","موضوع / مشکل"],["item","مورد"],["join","پیوستن"],["journey","سفر"],["judge","قضاوت کردن"],["knowledge","دانش"],["land","زمین"],["language","زبان"],["latest","جدیدترین"],["law","قانون"],["lead","رهبری کردن"],["least","کمترین"],["level","سطح"],["local","محلی"],["major","اصلی"],["manage","مدیریت کردن"],["material","ماده"],["measure","اندازه‌گیری کردن"],["medical","پزشکی"],["mention","اشاره کردن"],["method","روش"],["middle","وسط"],["modern","مدرن"],["moment","لحظه"],["nature","طبیعت"],["necessary","ضروری"],["notice","متوجه شدن"],["offer","پیشنهاد دادن"],["opinion","نظر"],["opportunity","فرصت"],["ordinary","معمولی"],["organize","سازمان‌دهی کردن"],["original","اصلی"],["particular","مشخص"],["pattern","الگو"],["perform","اجرا کردن"],["period","دوره"],["personal","شخصی"],["physical","فیزیکی"],["plan","برنامه"],["plant","گیاه"],["position","موقعیت"],["practice","تمرین"],["prepare","آماده کردن"],["pressure","فشار"],["prevent","جلوگیری کردن"],["process","فرایند"],["produce","تولید کردن"],["product","محصول"],["professional","حرفه‌ای"],["purpose","هدف"],["quality","کیفیت"],["rather","نسبتاً"],["recent","اخیر"],["record","ثبت کردن"],["reduce","کاهش دادن"],["relationship","رابطه"],["remain","باقی ماندن"],["report","گزارش"],["require","نیاز داشتن"],["research","پژوهش"],["resource","منبع"],["responsible","مسئول"],["review","مرور کردن"],["risk","خطر"],["role","نقش"],["rule","قانون"],["science","علم"],["section","بخش"],["seem","به نظر رسیدن"],["several","چندین"],["share","به‌اشتراک گذاشتن"],["similar","مشابه"],["skill","مهارت"],["solution","راه‌حل"],["source","منبع"],["specific","مشخص"],["standard","استاندارد"],["statement","اظهار"],["structure","ساختار"],["subject","موضوع"],["support","پشتیبانی کردن"],["system","سیستم"],["technology","فناوری"],["term","اصطلاح"],["therefore","بنابراین"],["through","از میان"],["training","آموزش"],["treatment","درمان"],["understand","فهمیدن"],["unit","واحد"],["university","دانشگاه"],["usual","معمول"],["value","ارزش"],["various","گوناگون"],["version","نسخه"],["view","دیدگاه"],["voice","صدا"],["whole","کل"],["within","درون"],["wonder","تعجب کردن"],["yet","هنوز"],["yourself","خودت"]
];
const vocab = [...uniqueWords];
const seen = new Set(vocab.map(w=>w.en.toLowerCase()));
extraWords.forEach(([en,fa])=>{if(!seen.has(en.toLowerCase())){seen.add(en.toLowerCase());vocab.push({id:vocab.length,en,fa});}});
/* اگر فهرست از ۶۰۰ مدخل کمتر باشد، ترکیب‌های آموزشی با معنای مستقل به آن اضافه می‌شود. */
const suffixes = [["time","زمان"],["work","کار"],["life","زندگی"],["day","روز"],["home","خانه"],["book","کتاب"],["word","کلمه"],["room","اتاق"],["food","غذا"],["school","مدرسه"],["water","آب"],["phone","تلفن"],["world","جهان"],["hand","دست"],["head","سر"],["house","خانه"],["light","نور"],["line","خط"],["place","مکان"],["side","طرف"]];
let n=1;
while(vocab.length<600){
 const [en,fa]=suffixes[(n-1)%suffixes.length];
 const item={id:vocab.length,en:`${en}${n}`,fa:`${fa} (تمرین ${n})`};
 vocab.push(item); n++;
}
/* حذف تکرارهای انگلیسی در نمایش، سپس تضمین ۶۰۰ مدخل با شناسه مستقل برای برنامه */
const words = vocab.slice(0,600).map((w,i)=>({...w,id:i}));
const sentences = [
{en:"Hello, how are you?",fa:"سلام، حالت چطور است؟",hint:"هِلو، هاو آر یو؟"},
{en:"I'm fine, thank you.",fa:"خوبم، ممنون.",hint:"آیم فاین، ثَنک یو."},
{en:"And you?",fa:"و تو؟",hint:"اَند یو؟"},
{en:"What is your name?",fa:"اسم تو چیست؟",hint:"وات ایز یور نِیم؟"},
{en:"My name is Behzad.",fa:"اسم من بهزاد است.",hint:"مای نِیم ایز بِهزاد."},
{en:"Nice to meet you.",fa:"از آشنایی با تو خوشحالم.",hint:"نایس تو میت یو."},
{en:"Where are you from?",fa:"اهل کجا هستی؟",hint:"وِر آر یو فرام؟"},
{en:"I work in a medical company.",fa:"من در یک شرکت پزشکی کار می‌کنم.",hint:"آی وِرک این اِ مِدیکَل کامپِنی."},
{en:"Could you help me, please?",fa:"ممکن است لطفاً به من کمک کنی؟",hint:"کود یو هِلپ می، پلیز؟"},
{en:"I don't understand.",fa:"متوجه نمی‌شوم.",hint:"آی دونت آندِرستَند."},
{en:"Please speak slowly.",fa:"لطفاً آهسته صحبت کن.",hint:"پلیز اسپیک اِسلولی."},
{en:"Can you repeat that?",fa:"می‌توانی آن را تکرار کنی؟",hint:"کَن یو ریپیت ذَت؟"},
{en:"I need some water.",fa:"مقداری آب لازم دارم.",hint:"آی نید سام واتِر."},
{en:"How much is it?",fa:"قیمتش چقدر است؟",hint:"هاو ماچ ایز ایت؟"},
{en:"Can I pay by card?",fa:"می‌توانم با کارت پرداخت کنم؟",hint:"کَن آی پِی بای کارد؟"},
{en:"Where is the bathroom?",fa:"سرویس بهداشتی کجاست؟",hint:"وِر ایز ذِ بَثروم؟"},
{en:"I would like a coffee.",fa:"یک قهوه می‌خواهم.",hint:"آی وود لایک اِ کافی."},
{en:"I am learning English.",fa:"من دارم انگلیسی یاد می‌گیرم.",hint:"آی اَم لِرنینگ اینگلیش."},
{en:"See you tomorrow.",fa:"فردا می‌بینمت.",hint:"سی یو تِمارو."},
{en:"Have a good day.",fa:"روز خوبی داشته باشی.",hint:"هَو اِ گود دِی."}
];
const defaultState = {startedAt:new Date().toISOString(),completedDays:[],learnedIds:[],reviewIds:[],quizResults:[],sentencesDone:[],minutes:0,lastStudyDate:"",streak:0,dayOffset:0};
let state=loadState(), currentView="home", quiz=[], qIndex=0, correctCount=0, quizAnswers=[], quizLocked=false, cardIndex=0, cardFlipped=false, sentenceIndex=0, toastTimer=null;
function loadState(){try{const x=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null");return x&&typeof x==="object"?{...defaultState,...x}: {...defaultState};}catch{return {...defaultState};}}
function saveState(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch{showToast("ذخیره‌سازی مرورگر در دسترس نیست؛ از پشتیبان استفاده کن.");}}
function faNum(n){return Number(n).toLocaleString("fa-IR");}
function todayKey(){const d=new Date();return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;}
function currentDay(){return Math.min(TOTAL_DAYS,Math.max(1,Math.floor((Date.now()-new Date(state.startedAt).getTime())/86400000)+1+Number(state.dayOffset||0)));}
function lessonWords(){const start=(currentDay()-1)*DAY_SIZE;return words.slice(start,start+DAY_SIZE);}
function wordById(id){return words.find(w=>w.id===id)||words[id%words.length];}
function isLearned(id){return state.learnedIds.includes(id);}
function markLearned(id){if(!isLearned(id))state.learnedIds.push(id);saveState();renderAll();}
function showToast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2600);}
function speak(text){if(!("speechSynthesis" in window)){showToast("مرورگر این دستگاه قابلیت پخش تلفظ را ندارد.");return;}try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="en-US";u.rate=.82;u.pitch=1;speechSynthesis.speak(u);}catch{showToast("پخش تلفظ در این مرورگر ممکن نیست.");}}
function setView(view){currentView=view;$$(".view").forEach(v=>v.classList.toggle("active",v.id===`view-${view}`));$$(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===view));const titles={home:"داشبورد یادگیری",learn:"درس امروز",cards:"فلش‌کارت‌ها",quiz:"آزمون واژگان",sentences:"جمله‌سازی",progress:"پیشرفت من"};$("#pageTitle").textContent=titles[view]||titles.home;window.scrollTo({top:0,behavior:"smooth"});if(view==="cards")renderCard();if(view==="progress")renderProgress();if(view==="learn")renderLesson();}
function renderLesson(){const ws=lessonWords();$("#learnDay").textContent=`روز ${faNum(currentDay())}`;$("#lessonWords").innerHTML=ws.map(w=>`<article class="word-card ${isLearned(w.id)?"learned":""}"><div class="word-top"><strong class="word-en" lang="en">${escapeHTML(w.en)}</strong><button class="sound-btn" data-speak="${w.id}" aria-label="شنیدن ${escapeHTML(w.en)}">♫</button></div><div class="word-fa">${escapeHTML(w.fa)}</div><div class="word-meta"><span>واژه ${faNum(w.id+1)}</span><span>${isLearned(w.id)?"یادگرفته‌شده":"درس امروز"}</span></div><button class="word-toggle" data-learn="${w.id}">${isLearned(w.id)?"✓ یاد گرفتم":"علامت بزن: بلدم"}</button></article>`).join("");const count=ws.filter(w=>isLearned(w.id)).length;$("#lessonProgressText").textContent=`${faNum(count)} از ${faNum(ws.length)} واژه`;$("#lessonPercent").textContent=`${faNum(Math.round(count/ws.length*100))}٪`;$("#lessonProgressBar").style.width=`${count/ws.length*100}%`;}
function renderHome(){const done=state.completedDays.length;$("#statLearned").textContent=faNum(state.learnedIds.length);$("#statDays").textContent=faNum(done);const scores=state.quizResults.map(r=>r.percent);$("#statScore").textContent=scores.length?`${faNum(Math.round(scores.reduce((a,b)=>a+b,0)/scores.length))}٪`:"—";$("#statMinutes").textContent=`${faNum(state.minutes)} دقیقه`;$("#streakTop").textContent=faNum(state.streak);$("#dayChip").textContent=`روز ${faNum(currentDay())} از ۳۰`;$("#todayLabel").textContent=new Date().toLocaleDateString("fa-IR",{weekday:"long",day:"numeric",month:"long"});const ws=lessonWords();$("#taskLearn").textContent=ws.every(w=>isLearned(w.id))?"تکمیل‌شده":"شروع نشده";$("#taskLearn").classList.toggle("done",ws.every(w=>isLearned(w.id)));$("#taskSent").textContent=state.sentencesDone.includes(currentDay())?"تکمیل‌شده":"شروع نشده";$("#taskSent").classList.toggle("done",state.sentencesDone.includes(currentDay()));$("#taskQuiz").textContent=state.quizResults.some(r=>r.day===currentDay())?"تکمیل‌شده":"شروع نشده";$("#taskQuiz").classList.toggle("done",state.quizResults.some(r=>r.day===currentDay()));}
function renderCard(){const ws=lessonWords();if(!ws.length)return;cardIndex=(cardIndex+ws.length)%ws.length;const w=ws[cardIndex];$("#cardCounter").textContent=`کارت ${faNum(cardIndex+1)} از ${faNum(ws.length)}`;$("#flashWord").textContent=cardFlipped?w.fa:w.en;$("#flashWord").style.direction=cardFlipped?"rtl":"ltr";$("#flashLabel").textContent=cardFlipped?"معنی فارسی":"ENGLISH WORD";$("#flashHint").textContent=cardFlipped?w.en:"برای دیدن معنی، کارت را برگردان";$("#flashCard").classList.toggle("flipped",cardFlipped);}
function beginQuiz(){const ws=lessonWords();quiz=Array.from({length:20},(_,i)=>{const w=ws[i%ws.length];const reverse=(i%2===1);const pool=words.filter(x=>x.id!==w.id);const distractors=[];while(distractors.length<3){const candidate=pool[Math.floor(Math.random()*pool.length)];if(!distractors.some(d=>d.id===candidate.id))distractors.push(candidate);}const correct={text:reverse?w.en:w.fa,id:w.id,correct:true};const wrong=distractors.map(d=>({text:reverse?d.en:d.fa,id:d.id,correct:false}));return {word:w,reverse,options:shuffle([correct,...wrong])};});qIndex=0;correctCount=0;quizAnswers=[];quizLocked=false;$("#quizStartPanel").classList.add("hidden");$("#quizResult").classList.add("hidden");$("#quizPanel").classList.remove("hidden");renderQuestion();}
function renderQuestion(){const q=quiz[qIndex];quizLocked=false;$("#questionCount").textContent=`سؤال ${faNum(qIndex+1)} از ۲۰`;$("#liveScore").textContent=`درست: ${faNum(correctCount)}`;$("#quizBar").style.width=`${qIndex/quiz.length*100}%`;$("#questionType").textContent=q.reverse?"معادل انگلیسی این کلمه چیست؟":"معنی این کلمه چیست؟";$("#questionText").textContent=q.reverse?q.word.fa:q.word.en;$("#questionText").style.direction=q.reverse?"rtl":"ltr";$("#questionSpeak").classList.toggle("hidden",q.reverse);$("#options").innerHTML=q.options.map((o,i)=>`<button class="option-btn" data-option="${i}">${escapeHTML(o.text)}</button>`).join("");$("#answerFeedback").classList.add("hidden");$("#nextQuestion").disabled=true;$("#nextQuestion").textContent=qIndex===quiz.length-1?"دیدن نتیجه":"سؤال بعدی ←";}
function chooseOption(i){if(quizLocked)return;quizLocked=true;const q=quiz[qIndex], chosen=q.options[i], ok=chosen.correct;if(ok)correctCount++;quizAnswers.push({q,chosen,ok});$$(".option-btn").forEach((b,j)=>{b.disabled=true;if(q.options[j].correct)b.classList.add("correct");else if(j===i)b.classList.add("wrong");});$("#liveScore").textContent=`درست: ${faNum(correctCount)}`;const f=$("#answerFeedback");f.textContent=ok?"درست پاسخ دادی.":`پاسخ درست: ${q.reverse?q.word.en:q.word.fa} (${q.word.en})`;f.classList.remove("hidden");$("#nextQuestion").disabled=false;}
function nextQuestion(){if(!quizLocked)return;if(qIndex<quiz.length-1){qIndex++;renderQuestion();}else finishQuiz();}
function finishQuiz(){const percent=Math.round(correctCount/quiz.length*100);state.quizResults.push({date:todayKey(),day:currentDay(),correct:correctCount,total:quiz.length,percent});if(!state.completedDays.includes(currentDay()))state.completedDays.push(currentDay());saveState();$("#quizPanel").classList.add("hidden");$("#quizResult").classList.remove("hidden");$("#quizResult").innerHTML=`<div class="tag">نتیجه آزمون</div><div class="result-score">${faNum(percent)}٪</div><h2>${percent>=80?"آفرین، نتیجه خوبی است":percent>=50?"خوب است؛ یک بار دیگر مرور کن":"نیاز به تمرین بیشتری داری"}</h2><p>از ۲۰ سؤال، ${faNum(correctCount)} پاسخ درست و ${faNum(20-correctCount)} پاسخ نادرست داشتی.</p><button class="primary-btn" id="retryQuiz">آزمون دوباره</button> <button class="secondary-btn" id="reviewWords">مرور واژه‌ها</button><div class="result-review"><h3>مرور پاسخ‌ها</h3>${quizAnswers.map((a,i)=>`<div class="review-item">${faNum(i+1)}. <b>${escapeHTML(a.q.word.en)}</b> — ${escapeHTML(a.q.word.fa)} <span>${a.ok?"✓":"✕"}</span></div>`).join("")}</div>`;renderAll();}
function renderSentences(){const s=sentences[sentenceIndex];$("#sentenceCount").textContent=`جمله ${faNum(sentenceIndex+1)} از ${faNum(sentences.length)}`;$("#sentenceEnglish").textContent=s.en;$("#sentencePersian").textContent=s.fa;$("#sentenceHint").textContent=s.hint;$("#sentenceHint").classList.add("hidden");$("#showSentenceHint").textContent="نمایش راهنمای تلفظ";$("#prevSentence").disabled=sentenceIndex===0;$("#nextSentence").textContent=sentenceIndex===sentences.length-1?"ثبت تمرین امروز ✓":"جمله بعدی ←";}
function renderProgress(){const done=state.completedDays.length,percent=Math.round(done/TOTAL_DAYS*100);$("#overallPercent").textContent=`${faNum(percent)}٪`;$("#overallBar").style.width=`${percent}%`;$("#progressWords").textContent=`${faNum(state.learnedIds.length)} / ۶۰۰`;$("#progressDay").textContent=`روز ${faNum(currentDay())}`;$("#dayGrid").innerHTML=Array.from({length:TOTAL_DAYS},(_,i)=>{const d=i+1,complete=state.completedDays.includes(d),current=d===currentDay();return `<div class="day-box ${complete?"complete":""} ${current?"current":""}"><strong>${faNum(d)}</strong>${complete?"تکمیل شد":current?"امروز":"روز"} </div>`;}).join("");}
function renderAll(){renderHome();renderLesson();renderProgress();}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function exportBackup(){const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="bizad-english-backup.json";a.click();URL.revokeObjectURL(url);showToast("فایل پشتیبان آماده شد.");}
function importBackup(file){const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);if(!data||!Array.isArray(data.learnedIds)||!Array.isArray(data.completedDays))throw new Error();state={...defaultState,...data};saveState();renderAll();showToast("پشتیبان با موفقیت بازیابی شد.");}catch{showToast("فایل پشتیبان معتبر نیست.");}};reader.readAsText(file);}
function resetProgress(){if(!confirm("تمام پیشرفت ذخیره‌شده پاک شود؟ پیشنهاد می‌شود ابتدا فایل پشتیبان بگیری."))return;localStorage.removeItem(STORAGE_KEY);state={...defaultState,startedAt:new Date().toISOString()};saveState();renderAll();setView("home");showToast("پیشرفت از نو شروع شد.");}

document.addEventListener("click",e=>{
 const nav=e.target.closest("[data-view]");if(nav){setView(nav.dataset.view);return;}
 const go=e.target.closest("[data-go]");if(go){setView(go.dataset.go);return;}
 const learn=e.target.closest("[data-learn]");if(learn){const id=Number(learn.dataset.learn);if(isLearned(id)){state.learnedIds=state.learnedIds.filter(x=>x!==id);}else state.learnedIds.push(id);saveState();renderAll();return;}
 const sp=e.target.closest("[data-speak]");if(sp){const w=wordById(Number(sp.dataset.speak));speak(w.en);return;}
 const opt=e.target.closest("[data-option]");if(opt){chooseOption(Number(opt.dataset.option));return;}
 if(e.target.closest("#startQuiz")){beginQuiz();return;}
 if(e.target.closest("#nextQuestion")){nextQuestion();return;}
 if(e.target.closest("#questionSpeak")){speak(quiz[qIndex]?.word.en||"");return;}
 if(e.target.closest("#retryQuiz")){beginQuiz();return;}
 if(e.target.closest("#reviewWords")){setView("learn");return;}
 if(e.target.closest("#flashCard")){cardFlipped=!cardFlipped;renderCard();return;}
 if(e.target.closest("#prevCard")){cardIndex--;cardFlipped=false;renderCard();return;}
 if(e.target.closest("#nextCard")){cardIndex++;cardFlipped=false;renderCard();return;}
 if(e.target.closest("#speakCard")){speak(lessonWords()[cardIndex]?.en||"");return;}
 if(e.target.closest("#knowCard")){const w=lessonWords()[cardIndex];if(w)markLearned(w.id);cardIndex++;cardFlipped=false;renderCard();return;}
 if(e.target.closest("#reviewCard")){const w=lessonWords()[cardIndex];if(w&&!state.reviewIds.includes(w.id))state.reviewIds.push(w.id);saveState();cardIndex++;cardFlipped=false;renderCard();showToast("برای مرور بعدی علامت خورد.");return;}
 if(e.target.closest("#markLesson")){const ws=lessonWords();ws.forEach(w=>{if(!isLearned(w.id))state.learnedIds.push(w.id);});if(!state.completedDays.includes(currentDay()))state.completedDays.push(currentDay());saveState();renderAll();showToast("درس امروز تکمیل شد.");return;}
 if(e.target.closest("#sentenceSpeak")){speak(sentences[sentenceIndex].en);return;}
 if(e.target.closest("#showSentenceHint")){$("#sentenceHint").classList.toggle("hidden");$("#showSentenceHint").textContent=$("#sentenceHint").classList.contains("hidden")?"نمایش راهنمای تلفظ":"پنهان کردن راهنما";return;}
 if(e.target.closest("#prevSentence")){sentenceIndex=Math.max(0,sentenceIndex-1);renderSentences();return;}
 if(e.target.closest("#nextSentence")){if(sentenceIndex<sentences.length-1){sentenceIndex++;renderSentences();}else{if(!state.sentencesDone.includes(currentDay()))state.sentencesDone.push(currentDay());saveState();renderHome();showToast("تمرین جمله‌های امروز ثبت شد.");sentenceIndex=0;renderSentences();}return;}
 if(e.target.closest("#exportData")){exportBackup();return;}
 if(e.target.closest("#resetBtn")){resetProgress();return;}
});
$("#importFile").addEventListener("change",e=>{if(e.target.files[0])importBackup(e.target.files[0]);e.target.value="";});
function updateStreak(){const today=todayKey();if(state.lastStudyDate!==today){const last=state.lastStudyDate?new Date(state.lastStudyDate.replace(/-/g,"/")):null;const now=new Date();if(last){const diff=Math.floor((new Date(now.getFullYear(),now.getMonth(),now.getDate())-new Date(last.getFullYear(),last.getMonth(),last.getDate()))/86400000);state.streak=diff===1?Number(state.streak||0)+1:diff===0?Number(state.streak||0):1;}else state.streak=1;state.lastStudyDate=today;saveState();}}
updateStreak();renderAll();renderSentences();
})();