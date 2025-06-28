"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, Download, Bell, Eye, Filter, TrendingUp, Users, Clock, CheckCircle } from "lucide-react"
import { toast } from "sonner"

interface QuoteRequest {
  id: string
  fullName: string
  email: string
  phone: string
  companyName: string
  website: string
  industry: string
  interestedPackage: string
  socialPlatforms: string[]
  businessGoals: string[]
  additionalMessage: string
  status: "new" | "in-progress" | "completed"
  submittedAt: string
  priority: "low" | "medium" | "high"
  estimatedValue: number
}

// Dummy data
const dummyRequests: QuoteRequest[] = [
  {
    id: "REQ-001",
    fullName: "Ahmad Rizki",
    email: "ahmad.rizki@techstartup.id",
    phone: "+62812345678",
    companyName: "TechStartup Indonesia",
    website: "https://techstartup.id",
    industry: "Teknologi",
    interestedPackage: "elite",
    socialPlatforms: ["Instagram", "LinkedIn", "Facebook", "Twitter"],
    businessGoals: ["Meningkatkan traffic website", "Lead generation", "Membangun brand awareness"],
    additionalMessage:
      "Kami adalah startup teknologi yang fokus pada AI dan machine learning. Membutuhkan strategi digital marketing yang komprehensif untuk meningkatkan brand awareness di pasar Indonesia.",
    status: "new",
    submittedAt: new Date().toISOString(),
    priority: "high",
    estimatedValue: 2000,
  },
  {
    id: "REQ-002",
    fullName: "Sari Dewi",
    email: "sari@fashionboutique.com",
    phone: "+62823456789",
    companyName: "Fashion Boutique Sari",
    website: "https://fashionboutique.com",
    industry: "Fashion",
    interestedPackage: "pro",
    socialPlatforms: ["Instagram", "TikTok", "Facebook"],
    businessGoals: ["Meningkatkan penjualan", "Meningkatkan engagement media sosial"],
    additionalMessage:
      "Boutique fashion wanita dengan target market usia 20-35 tahun. Ingin fokus pada Instagram dan TikTok marketing.",
    status: "in-progress",
    submittedAt: new Date(Date.now() - 86400000).toISOString(),
    priority: "medium",
    estimatedValue: 1000,
  },
  {
    id: "REQ-003",
    fullName: "Budi Santoso",
    email: "budi@warungmakan.id",
    phone: "+62834567890",
    companyName: "Warung Makan Nusantara",
    website: "",
    industry: "Makanan & Minuman",
    interestedPackage: "basic",
    socialPlatforms: ["Instagram", "Facebook"],
    businessGoals: ["Meningkatkan engagement media sosial", "Ekspansi pasar"],
    additionalMessage:
      "Warung makan tradisional yang ingin go digital. Butuh bantuan untuk memulai presence di media sosial.",
    status: "completed",
    submittedAt: new Date(Date.now() - 172800000).toISOString(),
    priority: "low",
    estimatedValue: 500,
  },
  {
    id: "REQ-004",
    fullName: "Lisa Chen",
    email: "lisa@beautycare.co.id",
    phone: "+62845678901",
    companyName: "Beauty Care Indonesia",
    website: "https://beautycare.co.id",
    industry: "Kesehatan",
    interestedPackage: "pro",
    socialPlatforms: ["Instagram", "TikTok", "YouTube"],
    businessGoals: ["Membangun brand awareness", "Meningkatkan penjualan", "Lead generation"],
    additionalMessage:
      "Brand skincare lokal yang ingin bersaing dengan brand internasional. Fokus pada content marketing dan influencer collaboration.",
    status: "new",
    submittedAt: new Date(Date.now() - 3600000).toISOString(),
    priority: "high",
    estimatedValue: 1000,
  },
  {
    id: "REQ-005",
    fullName: "Rudi Hartono",
    email: "rudi@properti.com",
    phone: "+62856789012",
    companyName: "Hartono Property",
    website: "https://hartonoproperty.com",
    industry: "Real Estate",
    interestedPackage: "elite",
    socialPlatforms: ["Instagram", "Facebook", "LinkedIn"],
    businessGoals: ["Lead generation", "Membangun brand awareness"],
    additionalMessage:
      "Developer properti yang ingin meningkatkan lead generation melalui digital marketing. Target market middle-upper class.",
    status: "in-progress",
    submittedAt: new Date(Date.now() - 259200000).toISOString(),
    priority: "high",
    estimatedValue: 2000,
  },
  {
    id: "REQ-006",
    fullName: "Maya Sari",
    email: "maya@edukasi.id",
    phone: "+62867890123",
    companyName: "Edukasi Online Indonesia",
    website: "https://edukasi.id",
    industry: "Pendidikan",
    interestedPackage: "pro",
    socialPlatforms: ["Instagram", "Facebook", "LinkedIn", "YouTube"],
    businessGoals: ["Meningkatkan traffic website", "Lead generation"],
    additionalMessage:
      "Platform edukasi online yang menyediakan kursus programming dan digital marketing. Ingin meningkatkan enrollment student.",
    status: "completed",
    submittedAt: new Date(Date.now() - 432000000).toISOString(),
    priority: "medium",
    estimatedValue: 1000,
  },
  {
    id: "REQ-007",
    fullName: "Andi Wijaya",
    email: "andi@otomotif.co.id",
    phone: "+62878901234",
    companyName: "Wijaya Otomotif",
    website: "https://wijayaotomotif.co.id",
    industry: "Otomotif",
    interestedPackage: "basic",
    socialPlatforms: ["Instagram", "Facebook"],
    businessGoals: ["Meningkatkan penjualan", "Membangun brand awareness"],
    additionalMessage:
      "Bengkel dan spare part mobil yang ingin expand ke online. Butuh strategi untuk menjangkau customer yang lebih luas.",
    status: "new",
    submittedAt: new Date(Date.now() - 7200000).toISOString(),
    priority: "medium",
    estimatedValue: 500,
  },
  {
    id: "REQ-008",
    fullName: "Fitri Ramadhani",
    email: "fitri@fintech.id",
    phone: "+62889012345",
    companyName: "FinTech Solutions",
    website: "https://fintechsolutions.id",
    industry: "Keuangan",
    interestedPackage: "elite",
    socialPlatforms: ["LinkedIn", "Instagram", "Twitter"],
    businessGoals: ["Lead generation", "Membangun brand awareness", "Meningkatkan traffic website"],
    additionalMessage:
      "Startup fintech yang fokus pada lending dan payment solutions. Butuh strategi B2B marketing yang kuat.",
    status: "in-progress",
    submittedAt: new Date(Date.now() - 518400000).toISOString(),
    priority: "high",
    estimatedValue: 2000,
  },
]

export function AdminDashboard() {
  const [requests, setRequests] = useState<QuoteRequest[]>(dummyRequests)
  const [filteredRequests, setFilteredRequests] = useState<QuoteRequest[]>(dummyRequests)
  const [selectedRequest, setSelectedRequest] = useState<QuoteRequest | null>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  // Calculate statistics
  const stats = useMemo(() => {
    const total = requests.length
    const newRequests = requests.filter((req) => req.status === "new").length
    const inProgress = requests.filter((req) => req.status === "in-progress").length
    const completed = requests.filter((req) => req.status === "completed").length
    const totalValue = requests.reduce((sum, req) => sum + req.estimatedValue, 0)
    const highPriority = requests.filter((req) => req.priority === "high").length

    return {
      total,
      newRequests,
      inProgress,
      completed,
      totalValue,
      highPriority,
    }
  }, [requests])

  // Filter requests based on search term, status, date, and priority
  useEffect(() => {
    let filtered = requests

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (req) =>
          req.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          req.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          req.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          req.id.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((req) => req.status === statusFilter)
    }

    // Priority filter
    if (priorityFilter !== "all") {
      filtered = filtered.filter((req) => req.priority === priorityFilter)
    }

    // Date filter
    if (dateFilter !== "all") {
      const now = new Date()
      const filterDate = new Date()

      switch (dateFilter) {
        case "today":
          filterDate.setHours(0, 0, 0, 0)
          filtered = filtered.filter((req) => new Date(req.submittedAt) >= filterDate)
          break
        case "week":
          filterDate.setDate(now.getDate() - 7)
          filtered = filtered.filter((req) => new Date(req.submittedAt) >= filterDate)
          break
        case "month":
          filterDate.setMonth(now.getMonth() - 1)
          filtered = filtered.filter((req) => new Date(req.submittedAt) >= filterDate)
          break
      }
    }

    setFilteredRequests(filtered)
  }, [requests, searchTerm, statusFilter, dateFilter, priorityFilter])

  const updateRequestStatus = (id: string, newStatus: "new" | "in-progress" | "completed") => {
    const updatedRequests = requests.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
    setRequests(updatedRequests)

    if (selectedRequest && selectedRequest.id === id) {
      setSelectedRequest({ ...selectedRequest, status: newStatus })
    }

    toast.success("Status berhasil diperbarui", {
      description: `Request ${id} telah diubah ke status ${newStatus}`,
    })
  }

  const updateRequestPriority = (id: string, newPriority: "low" | "medium" | "high") => {
    const updatedRequests = requests.map((req) => (req.id === id ? { ...req, priority: newPriority } : req))
    setRequests(updatedRequests)

    if (selectedRequest && selectedRequest.id === id) {
      setSelectedRequest({ ...selectedRequest, priority: newPriority })
    }

    toast.success("Prioritas berhasil diperbarui", {
      description: `Request ${id} telah diubah ke prioritas ${newPriority}`,
    })
  }

  const exportToCSV = () => {
    const headers = [
      "ID",
      "Nama Lengkap",
      "Email",
      "Telepon",
      "Perusahaan",
      "Website",
      "Industri",
      "Paket",
      "Platform Media Sosial",
      "Tujuan Bisnis",
      "Status",
      "Prioritas",
      "Estimasi Nilai",
      "Tanggal Kirim",
    ]

    const csvContent = [
      headers.join(","),
      ...filteredRequests.map((req) =>
        [
          req.id,
          req.fullName,
          req.email,
          req.phone,
          req.companyName || "-",
          req.website || "-",
          req.industry,
          req.interestedPackage,
          req.socialPlatforms.join("; "),
          req.businessGoals.join("; "),
          req.status,
          req.priority,
          `$${req.estimatedValue}`,
          new Date(req.submittedAt).toLocaleDateString("id-ID"),
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `quote-requests-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast.success("Export berhasil", {
      description: "Data telah diunduh dalam format CSV",
    })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge variant="destructive">Baru</Badge>
      case "in-progress":
        return <Badge variant="secondary">Diproses</Badge>
      case "completed":
        return <Badge variant="default">Selesai</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">Tinggi</Badge>
      case "medium":
        return <Badge variant="secondary">Sedang</Badge>
      case "low":
        return <Badge variant="outline">Rendah</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  const getPackageName = (packageId: string) => {
    switch (packageId) {
      case "basic":
        return "Basic Plan ($500)"
      case "pro":
        return "Pro Plan ($1000)"
      case "elite":
        return "Elite Plan ($2000)"
      case "consultation":
        return "Konsultasi"
      default:
        return packageId
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Kelola permintaan quote dari klien</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="relative bg-transparent">
            <Bell className="w-4 h-4" />
            {stats.newRequests > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                {stats.newRequests}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground">+{stats.newRequests} baru hari ini</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Requests Baru</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.newRequests}</div>
            <p className="text-xs text-muted-foreground">Membutuhkan perhatian</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dalam Proses</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.inProgress}</div>
            <p className="text-xs text-muted-foreground">Sedang dikerjakan</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Nilai Estimasi</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{formatCurrency(stats.totalValue)}</div>
            <p className="text-xs text-muted-foreground">{stats.completed} selesai</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filter & Pencarian
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Cari ID, nama, email, atau perusahaan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Filter Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Status</SelectItem>
                <SelectItem value="new">Baru</SelectItem>
                <SelectItem value="in-progress">Diproses</SelectItem>
                <SelectItem value="completed">Selesai</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Filter Prioritas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Prioritas</SelectItem>
                <SelectItem value="high">Tinggi</SelectItem>
                <SelectItem value="medium">Sedang</SelectItem>
                <SelectItem value="low">Rendah</SelectItem>
              </SelectContent>
            </Select>

            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Filter Tanggal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Tanggal</SelectItem>
                <SelectItem value="today">Hari Ini</SelectItem>
                <SelectItem value="week">7 Hari Terakhir</SelectItem>
                <SelectItem value="month">30 Hari Terakhir</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={exportToCSV} variant="outline" className="flex items-center gap-2 bg-transparent">
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Requests Table */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Permintaan Quote ({filteredRequests.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Nama</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Perusahaan</TableHead>
                  <TableHead>Paket</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Prioritas</TableHead>
                  <TableHead>Nilai</TableHead>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-mono text-sm">{request.id}</TableCell>
                    <TableCell className="font-medium">{request.fullName}</TableCell>
                    <TableCell>{request.email}</TableCell>
                    <TableCell>{request.companyName || "-"}</TableCell>
                    <TableCell>{getPackageName(request.interestedPackage)}</TableCell>
                    <TableCell>{getStatusBadge(request.status)}</TableCell>
                    <TableCell>{getPriorityBadge(request.priority)}</TableCell>
                    <TableCell className="font-medium">{formatCurrency(request.estimatedValue)}</TableCell>
                    <TableCell>{new Date(request.submittedAt).toLocaleDateString("id-ID")}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedRequest(request)
                            setIsDetailModalOpen(true)
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Select
                          value={request.status}
                          onValueChange={(value) => updateRequestStatus(request.id, value as any)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">Baru</SelectItem>
                            <SelectItem value="in-progress">Diproses</SelectItem>
                            <SelectItem value="completed">Selesai</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Detail Modal */}
      <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Detail Permintaan Quote - {selectedRequest?.id}</span>
              {selectedRequest && (
                <div className="flex gap-2">
                  {getStatusBadge(selectedRequest.status)}
                  {getPriorityBadge(selectedRequest.priority)}
                </div>
              )}
            </DialogTitle>
          </DialogHeader>

          {selectedRequest && (
            <div className="space-y-6">
              {/* Contact & Company Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Informasi Kontak</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Nama:</strong> {selectedRequest.fullName}
                    </div>
                    <div>
                      <strong>Email:</strong> {selectedRequest.email}
                    </div>
                    <div>
                      <strong>Telepon:</strong> {selectedRequest.phone}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Informasi Perusahaan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Perusahaan:</strong> {selectedRequest.companyName || "-"}
                    </div>
                    <div>
                      <strong>Website:</strong> {selectedRequest.website || "-"}
                    </div>
                    <div>
                      <strong>Industri:</strong> {selectedRequest.industry}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Package & Value */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Paket & Nilai</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <strong>Paket:</strong> {getPackageName(selectedRequest.interestedPackage)}
                    </div>
                    <div>
                      <strong>Estimasi Nilai:</strong> {formatCurrency(selectedRequest.estimatedValue)}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Status & Prioritas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <strong>Status:</strong>
                      <Select
                        value={selectedRequest.status}
                        onValueChange={(value) => updateRequestStatus(selectedRequest.id, value as any)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">Baru</SelectItem>
                          <SelectItem value="in-progress">Diproses</SelectItem>
                          <SelectItem value="completed">Selesai</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center gap-2">
                      <strong>Prioritas:</strong>
                      <Select
                        value={selectedRequest.priority}
                        onValueChange={(value) => updateRequestPriority(selectedRequest.id, value as any)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Rendah</SelectItem>
                          <SelectItem value="medium">Sedang</SelectItem>
                          <SelectItem value="high">Tinggi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Platforms */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Platform Media Sosial</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {selectedRequest.socialPlatforms.map((platform) => (
                      <Badge key={platform} variant="outline">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Business Goals */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tujuan Bisnis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {selectedRequest.businessGoals.map((goal) => (
                      <Badge key={goal} variant="secondary">
                        {goal}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Message */}
              {selectedRequest.additionalMessage && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pesan Tambahan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm bg-muted p-4 rounded-lg leading-relaxed">
                      {selectedRequest.additionalMessage}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Footer Info */}
              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Dikirim pada: {new Date(selectedRequest.submittedAt).toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setIsDetailModalOpen(false)}>
                    Tutup
                  </Button>
                  <Button>Kirim Proposal</Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
