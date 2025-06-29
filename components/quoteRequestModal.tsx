"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"

interface QuoteRequestModalProps {
  isOpen: boolean
  onClose: () => void
  selectedPlan: string
}

const socialPlatforms = ["Instagram", "Facebook", "LinkedIn", "TikTok", "Twitter", "Lainnya"]
const businessGoals = [
  "Meningkatkan traffic website",
  "Meningkatkan engagement media sosial",
  "Meningkatkan penjualan",
  "Membangun brand awareness",
  "Lead generation",
  "Ekspansi pasar",
  "Lainnya",
]
const industries = [
  "Teknologi",
  "E-commerce",
  "Kesehatan",
  "Pendidikan",
  "Keuangan",
  "Makanan & Minuman",
  "Fashion",
  "Real Estate",
  "Otomotif",
  "Lainnya",
]

export function QuoteRequestModal({ isOpen, onClose, selectedPlan }: QuoteRequestModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    industry: "",
    interestedPackage: selectedPlan,
    socialPlatforms: [] as string[],
    businessGoals: [] as string[],
    additionalMessage: "",
  })

  const handleSocialPlatformChange = (platform: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      socialPlatforms: checked
        ? [...prev.socialPlatforms, platform]
        : prev.socialPlatforms.filter((p) => p !== platform),
    }))
  }

  const handleBusinessGoalChange = (goal: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      businessGoals: checked ? [...prev.businessGoals, goal] : prev.businessGoals.filter((g) => g !== goal),
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/quote-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          status: "new",
        }),
      })

      if (response.ok) {
        toast.success("Permintaan berhasil dikirim!", {
          description: "Tim kami akan menghubungi Anda dalam 1x24 jam.",
        })
        onClose()
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          website: "",
          industry: "",
          interestedPackage: "",
          socialPlatforms: [],
          businessGoals: [],
          additionalMessage: "",
        })
      } else {
        throw new Error("Failed to submit")
      }
    } catch {
      toast.error("Terjadi kesalahan", {
        description: "Silakan coba lagi nanti.",
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="z-50 max-w-2xl max-h-[90vh] overflow-y-auto bg-white sm:rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informasi Kontak */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informasi Kontak</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Nama Lengkap *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">Nomor Telepon *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                required
              />
            </div>
          </div>

          {/* Informasi Perusahaan */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informasi Perusahaan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Nama Perusahaan</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, companyName: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => setFormData((prev) => ({ ...prev, website: e.target.value }))}
                  placeholder="https://"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="industry">Industri atau Bidang Usaha *</Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih industri" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Pilihan Paket */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Paket yang Diminati</h3>
            <RadioGroup
              value={formData.interestedPackage}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, interestedPackage: value }))}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="basic" id="basic" />
                <Label htmlFor="basic">Basic Plan ($500)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pro" id="pro" />
                <Label htmlFor="pro">Pro Plan ($1000)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="elite" id="elite" />
                <Label htmlFor="elite">Elite Plan ($2000)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="consultation" id="consultation" />
                <Label htmlFor="consultation">Belum yakin / Butuh konsultasi</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Platform Media Sosial */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Platform Media Sosial yang Dimiliki</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {socialPlatforms.map((platform) => (
                <div key={platform} className="flex items-center space-x-2">
                  <Checkbox
                    id={platform}
                    checked={formData.socialPlatforms.includes(platform)}
                    onCheckedChange={(checked) =>
                      handleSocialPlatformChange(platform, checked === true)
                    }
                  />
                  <Label htmlFor={platform}>{platform}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Tujuan Utama */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tujuan Utama</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {businessGoals.map((goal) => (
                <div key={goal} className="flex items-center space-x-2">
                  <Checkbox
                    id={goal}
                    checked={formData.businessGoals.includes(goal)}
                    onCheckedChange={(checked) =>
                      handleBusinessGoalChange(goal, checked === true)
                    }
                  />
                  <Label htmlFor={goal}>{goal}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Pesan Tambahan */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Pesan Tambahan</h3>
            <Textarea
              value={formData.additionalMessage}
              onChange={(e) => setFormData((prev) => ({ ...prev, additionalMessage: e.target.value }))}
              placeholder="Ceritakan lebih detail tentang kebutuhan Anda..."
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Batal
            </Button>
            <Button type="submit" className="flex-1">
              Kirim Permintaan
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
