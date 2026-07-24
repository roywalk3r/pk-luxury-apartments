import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  MapPin,
  Shield,
  Sparkles,
  ArrowRight,
  Star,
  Wifi,
  Car,
  Droplets,
  Zap,
  CheckCircle2,
  Home,
  Phone,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RoomCard } from "@/components/room-card"
import { prisma } from "@/lib/db"

const amenities = [
  {
    icon: Shield,
    label: "24/7 Security",
    description: "Gated compound with round-the-clock surveillance and controlled access.",
  },
  {
    icon: Wifi,
    label: "High-Speed Wi-Fi",
    description: "Fiber-ready connections pre-wired for every unit.",
  },
  {
    icon: Car,
    label: "Secure Parking",
    description: "Dedicated parking spaces for residents and visitors.",
  },
  {
    icon: Droplets,
    label: "Reliable Water",
    description: "Reservoir and water-heater supply, so dry-days are history.",
  },
  {
    icon: Zap,
    label: "Backup Power",
    description: "Standby generator keeps essentials running during outages.",
  },
  {
    icon: Sparkles,
    label: "Modern Finish",
    description: "Tiled floors, fitted kitchen, and premium fixtures throughout.",
  },
]

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Browse & book",
    text: "View available rooms, compare prices, and submit a booking request online.",
  },
  {
    icon: CheckCircle2,
    step: "02",
    title: "Get confirmed",
    text: "Management reviews your request and confirms your move-in date.",
  },
  {
    icon: Star,
    step: "03",
    title: "Move in",
    text: "Sign in to your tenant portal to pay rent, bills, and request maintenance.",
  },
]

export default async function HomePage() {
  const [availableCount, totalCount, featuredRooms] = await Promise.all([
    prisma.room.count({ where: { status: "AVAILABLE" } }),
    prisma.room.count(),
    prisma.room.findMany({
      where: { status: "AVAILABLE" },
      orderBy: { monthlyRent: "asc" },
      take: 3,
    }),
  ])

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-28 sm:pb-32 sm:pt-36">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop"
            alt="PK Luxury Apartments exterior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/70 to-background" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/90 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur">
            <Sparkles className="size-4" />
            <span>Modern living in Haatso, Ghana</span>
          </div>
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            PK Luxury Apartments
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            Fully finished apartments with secure parking, standby power, and attentive management.
            Browse rooms, book a viewing, and manage your tenancy &mdash; all in one place.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/rooms"
              className={buttonVariants({ size: "lg", className: "px-6" })}
            >
              Browse available rooms
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              href="/login"
              className={buttonVariants({ variant: "outline", size: "lg", className: "px-6" })}
            >
              Tenant sign in
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-card px-6 py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="relative text-center">
            <div className="text-4xl font-bold tracking-tight text-primary">{availableCount}</div>
            <div className="mt-1 text-sm font-medium text-muted-foreground">Rooms available now</div>
          </div>
          <div className="relative text-center sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:h-10 sm:before:w-px sm:before:-translate-y-1/2 sm:before:bg-border sm:after:absolute sm:after:right-0 sm:after:top-1/2 sm:after:h-10 sm:after:w-px sm:after:-translate-y-1/2 sm:after:bg-border">
            <div className="text-4xl font-bold tracking-tight text-foreground">{totalCount}</div>
            <div className="mt-1 text-sm font-medium text-muted-foreground">Total apartments</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold tracking-tight text-accent">Haatso</div>
            <div className="mt-1 text-sm font-medium text-muted-foreground">Prime Greater Accra location</div>
          </div>
        </div>
      </section>

      {/* Featured rooms */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured rooms</h2>
              <p className="mt-3 text-muted-foreground">
                Move-in ready apartments currently open for booking.
              </p>
            </div>
            <Link
              href="/rooms"
              className={buttonVariants({ variant: "outline", className: "shrink-0" })}
            >
              View all rooms
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>

          {featuredRooms.length === 0 ? (
            <Card className="p-10 text-center text-muted-foreground">
              No rooms are currently available. Check back soon or contact management.
            </Card>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredRooms.map((room) => (
                <RoomCard key={room.id} room={room} variant="featured" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-secondary/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Comfort comes standard</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Every apartment is designed for convenience, security, and a touch of luxury.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map(({ icon: Icon, label, description }) => (
              <Card
                key={label}
                className="flex flex-row items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm"
              >
                <div className="gold-gradient flex size-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground shadow-sm">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              From first click to move-in day in three simple steps.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map(({ icon: Icon, step, title, text }) => (
              <div key={step} className="relative text-center">
                <div className="gold-gradient mx-auto mb-5 flex size-16 items-center justify-center rounded-2xl text-primary-foreground shadow-lg">
                  <Icon className="size-7" />
                </div>
                <div className="mb-2 text-sm font-bold text-primary">{step}</div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="gold-gradient relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-6 py-20 text-center text-primary-foreground shadow-xl">
          <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 size-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to make PK your next home?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
              {availableCount > 0
                ? `${availableCount} room${availableCount === 1 ? "" : "s"} ready to book. Schedule a viewing today.`
                : "Join the waitlist and be the first to know when a room opens up."}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/rooms"
                className={buttonVariants({
                  size: "lg",
                  className: "bg-white px-7 text-primary hover:bg-white/90",
                })}
              >
                {availableCount > 0 ? "Browse rooms" : "Join waitlist"}
              </Link>
              <Link
                href="/login"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "border-white/40 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white",
                })}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="gold-gradient flex size-9 items-center justify-center rounded-lg text-primary-foreground">
              <Home className="size-5" />
            </div>
            <span className="font-semibold text-foreground">PK Luxury Apartments</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4" />
              Haatso, Greater Accra, Ghana
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="size-4" />
              Contact management
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}
