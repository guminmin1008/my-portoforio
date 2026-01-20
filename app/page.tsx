"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Zap,
  Settings,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  Code2,
  Sparkles,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

// Navigation items
const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "Contact", href: "#contact" },
];

// Features data
const features = [
  {
    icon: Zap,
    title: "爆速開発",
    description: "AI活用による圧倒的な短納期。従来の開発期間を大幅に短縮し、ビジネスチャンスを逃しません。",
  },
  {
    icon: Settings,
    title: "柔軟な対応",
    description: "設計段階からの相談が可能。言語・フレームワーク不問で、最適な技術選定をご提案します。",
  },
  {
    icon: ShieldCheck,
    title: "品質の担保",
    description: "大手企業レベルのセキュリティとテスト体制。安心してプロダクトをリリースできます。",
  },
];

// Pricing plans
const pricingPlans = [
  {
    name: "Entry",
    description: "技術顧問・相談",
    price: "5万〜",
    unit: "月",
    features: ["技術相談・レビュー", "アーキテクチャ設計支援", "コードレビュー", "月4回のMTG"],
    popular: false,
  },
  {
    name: "Basic",
    description: "爆速MVP開発",
    price: "50万〜",
    unit: "一式",
    features: ["MVP設計・開発", "AI駆動による高速実装", "基本的なテスト", "納品後1ヶ月のサポート"],
    popular: true,
  },
  {
    name: "Standard",
    description: "開発・保守",
    price: "20万〜",
    unit: "月",
    features: ["機能開発・改善", "バグ修正", "パフォーマンス改善", "運用サポート"],
    popular: false,
  },
  {
    name: "Enterprise",
    description: "大規模システム構築",
    price: "300万〜",
    unit: "一式",
    features: ["要件定義から設計", "スケーラブルな設計", "セキュリティ監査対応", "長期保守プラン"],
    popular: false,
  },
];

// Works placeholder data
const works = [
  {
    title: "SaaS プラットフォーム開発",
    category: "Webアプリケーション",
    description: "月間10万ユーザーを支えるSaaSプラットフォームのフルスタック開発",
  },
  {
    title: "AI チャットボット構築",
    category: "AI/ML",
    description: "カスタマーサポート自動化のためのAIチャットボットシステム",
  },
  {
    title: "ECサイト リニューアル",
    category: "Eコマース",
    description: "売上200%向上を達成したECサイトの完全リニューアル",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "送信に失敗しました");
      }

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "送信に失敗しました");
    }
  };

  return (
    <div className="min-h-screen bg-background" id="home">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">DevForge</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              無料相談
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
            <div className="space-y-1 px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                無料相談
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 right-0 h-[300px] w-[400px] bg-gradient-to-tl from-purple-600/10 via-transparent to-transparent blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-muted-foreground">AI-Powered Development</span>
              </div>

              {/* Main heading */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                  AI駆動開発で、
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  通常の3倍のスピード納品。
                </span>
              </h1>

              {/* Subheading */}
              <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
                システム開発の課題を技術で解決します。
                <br className="hidden sm:block" />
                MVP開発から大規模システム構築まで。エンジニアリングパートナー。
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-base font-semibold px-8"
                  asChild
                >
                  <a href="#contact">
                    無料相談を予約する
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8"
                  asChild
                >
                  <a href="#works">
                    実績を見る
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-32" id="services">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section header */}
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Services
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                選ばれる3つの理由
              </p>
              <p className="mt-4 text-muted-foreground">
                AI駆動開発による圧倒的な効率と、確かな技術力で課題を解決します
              </p>
            </div>

            {/* Features grid */}
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-500/20 ring-1 ring-white/10">
                      <feature.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section header */}
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Pricing
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                料金プラン
              </p>
              <p className="mt-4 text-muted-foreground">
                プロジェクトの規模に合わせた柔軟なプランをご用意しています
              </p>
            </div>

            {/* Pricing cards */}
            <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pricingPlans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative overflow-hidden transition-all ${
                    plan.popular
                      ? "border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-lg shadow-cyan-500/10"
                      : "border-border/50 bg-card/50 hover:border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 rounded-bl-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1 text-xs font-semibold">
                      人気
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.unit}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`mt-6 w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                          : "bg-secondary hover:bg-secondary/80"
                      }`}
                      variant={plan.popular ? "default" : "secondary"}
                      asChild
                    >
                      <a href="#contact">相談する</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section className="py-20 lg:py-32" id="works">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section header */}
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Works
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                実績紹介
              </p>
              <p className="mt-4 text-muted-foreground">
                これまでに手がけたプロジェクトの一部をご紹介します
              </p>
            </div>

            {/* Works grid */}
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((work, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-cyan-500/30"
                >
                  {/* Placeholder image */}
                  <div className="aspect-video bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-purple-600/20 flex items-center justify-center">
                    <Code2 className="h-12 w-12 text-muted-foreground/30" />
                  </div>
                  <CardHeader>
                    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-cyan-400">
                      {work.category}
                    </div>
                    <CardTitle className="text-lg group-hover:text-cyan-400 transition-colors">
                      {work.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{work.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32 bg-muted/30" id="contact">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              {/* Section header */}
              <div className="text-center">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  Contact
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  お問い合わせ
                </p>
                <p className="mt-4 text-muted-foreground">
                  プロジェクトのご相談やお見積りなど、お気軽にお問い合わせください
                </p>
              </div>

              {/* Contact form */}
              <Card className="mt-12 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  {formStatus === "success" ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-semibold">送信完了</h3>
                      <p className="mt-2 text-muted-foreground">
                        お問い合わせありがとうございます。<br />
                        内容を確認次第、ご連絡いたします。
                      </p>
                      <Button
                        variant="outline"
                        className="mt-6"
                        onClick={() => setFormStatus("idle")}
                      >
                        新しいお問い合わせ
                      </Button>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          お名前
                        </label>
                        <Input
                          id="name"
                          placeholder="山田 太郎"
                          className="bg-background/50"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          disabled={formStatus === "loading"}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          メールアドレス
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="taro@example.com"
                          className="bg-background/50"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={formStatus === "loading"}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          メッセージ
                        </label>
                        <Textarea
                          id="message"
                          placeholder="プロジェクトの概要やご相談内容をお書きください"
                          rows={5}
                          className="bg-background/50 resize-none"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          disabled={formStatus === "loading"}
                          required
                        />
                      </div>
                      {formStatus === "error" && (
                        <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">
                          {errorMessage}
                        </div>
                      )}
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                        disabled={formStatus === "loading"}
                      >
                        {formStatus === "loading" ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            送信中...
                          </>
                        ) : (
                          <>
                            送信する
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-blue-500 to-cyan-400">
                <Code2 className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold">DevForge</span>
            </a>

            {/* Copyright & Built with */}
            <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-4">
              <p>&copy; {new Date().getFullYear()} DevForge. All rights reserved.</p>
              <span className="hidden sm:inline">|</span>
              <p className="flex items-center gap-1">
                Built with Next.js & AI
                <Sparkles className="h-3 w-3 text-cyan-400" />
                in 3 hours
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
