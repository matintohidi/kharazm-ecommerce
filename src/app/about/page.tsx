import Image from "next/image";
import { Mail, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "علی محمدی",
      position: "مدیر عامل",
      bio: "علی بیش از ۱۵ سال تجربه در زمینه تجارت الکترونیک و مدیریت کسب و کار دارد. او بنیانگذار خوارزم است و چشم‌انداز اصلی شرکت را شکل داده است.",
      image: "/placeholder.svg?height=400&width=400&text=علی+محمدی",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "ali@kharazm.com",
      },
    },
    {
      id: 2,
      name: "سارا احمدی",
      position: "مدیر فنی",
      bio: "سارا متخصص در زمینه توسعه وب و مدیریت تیم‌های فنی است. او مسئول توسعه و نگهداری پلتفرم خوارزم و زیرساخت‌های فنی آن است.",
      image: "/placeholder.svg?height=400&width=400&text=سارا+احمدی",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "sara@kharazm.com",
      },
    },
    {
      id: 3,
      name: "محمد حسینی",
      position: "مدیر بازاریابی",
      bio: "محمد با بیش از ۱۰ سال تجربه در زمینه بازاریابی دیجیتال، استراتژی‌های بازاریابی و برندینگ خوارزم را هدایت می‌کند.",
      image: "/placeholder.svg?height=400&width=400&text=محمد+حسینی",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "mohammad@kharazm.com",
      },
    },
    {
      id: 4,
      name: "زهرا کریمی",
      position: "مدیر تجربه مشتری",
      bio: "زهرا مسئول بهبود تجربه مشتریان و ارائه خدمات پس از فروش است. او با تمرکز بر رضایت مشتری، کیفیت خدمات خوارزم را تضمین می‌کند.",
      image: "/placeholder.svg?height=400&width=400&text=زهرا+کریمی",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "zahra@kharazm.com",
      },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full">
        <div
          className="absolute left-0 right-0 top-0 -z-10 h-[350px] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://wss-sharif.com/_next/static/media/Rectangle.b911abb6.png')",
          }}
        ></div>
        <div className="mx-auto max-w-[1200px] rounded-2xl bg-white shadow-[0px_30px_60px_0px_rgba(189,192,199,0.10)] mt-24 mb-16">
          <div className="flex max-w-[1199px] flex-col items-start justify-center gap-8 px-[72px] py-[60px]">
            <div className="flex flex-row items-start justify-between self-stretch lg:max-w-[1055px]">
              <div className="flex-col gap-2">
                <p className="text-[20px] font-medium uppercase not-italic leading-[normal] tracking-[0.8px] text-[#8A8998]">
                  کشف داستان ما
                </p>
                <p className="text-[76px] font-bold not-italic leading-[76px] tracking-[-1.52px] text-[#1F2B3D]">
                  درباره ما
                </p>
                <p className="flex items-center justify-center gap-[13px] pb-4 pt-10 text-lg leading-relaxed text-neutral-400">
                  فروشگاه آنلاین خوارزم با هدف ارائه بهترین تجربه خرید آنلاین
                  برای مشتریان ایرانی تأسیس شده است. ما با تمرکز بر کیفیت
                  محصولات، قیمت‌های مناسب و خدمات پس از فروش عالی، تلاش می‌کنیم
                  تا بهترین پلتفرم تجارت الکترونیک در ایران باشیم.
                </p>
                <p className="flex items-center justify-center gap-[13px] py-4 text-lg leading-relaxed text-neutral-400">
                  خوارزم در طول سال‌های فعالیت خود، توانسته است اعتماد هزاران
                  مشتری را جلب کند و به یکی از پیشروان صنعت تجارت الکترونیک در
                  کشور تبدیل شود. ما با همکاری نزدیک با فروشندگان معتبر و
                  تولیدکنندگان مطرح، محصولاتی با کیفیت و اصالت تضمین شده ارائه
                  می‌دهیم.
                </p>
                <p className="flex items-center justify-center gap-[13px] py-4 text-lg leading-relaxed text-neutral-400">
                  تیم ما متشکل از متخصصان با تجربه در زمینه‌های مختلف تجارت
                  الکترونیک، فناوری اطلاعات و خدمات مشتری است که همگی با هدف
                  مشترک ارائه بهترین خدمات به شما عزیزان تلاش می‌کنند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <section className="py-16 bg-muted/30 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">ارزش‌های ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">کیفیت</h3>
              <p className="text-muted-foreground">
                ما تنها محصولات با کیفیت را ارائه می‌دهیم و اصالت تمامی کالاها
                را تضمین می‌کنیم.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">شفافیت</h3>
              <p className="text-muted-foreground">
                ما به شفافیت در قیمت‌گذاری، اطلاعات محصولات و فرآیندهای کسب و
                کار باور داریم.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">نوآوری</h3>
              <p className="text-muted-foreground">
                ما همواره به دنبال راه‌های جدید برای بهبود تجربه خرید آنلاین و
                ارائه خدمات بهتر هستیم.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">مشتری‌مداری</h3>
              <p className="text-muted-foreground">
                رضایت مشتری اولویت اصلی ماست و تمام تلاش خود را برای ارائه
                بهترین خدمات به کار می‌گیریم.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">مسئولیت اجتماعی</h3>
              <p className="text-muted-foreground">
                ما به مسئولیت خود در قبال جامعه و محیط زیست متعهد هستیم و از کسب
                و کارهای پایدار حمایت می‌کنیم.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">همکاری</h3>
              <p className="text-muted-foreground">
                ما با فروشندگان، تولیدکنندگان و شرکای تجاری خود روابط بلندمدت و
                مبتنی بر اعتماد متقابل ایجاد می‌کنیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-background w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">تیم ما</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-background border rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3 space-x-reverse">
                    <Link
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">لینکدین</span>
                    </Link>
                    <Link
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">توییتر</span>
                    </Link>
                    <Link
                      href={`mailto:${member.social.email}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">ایمیل</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
