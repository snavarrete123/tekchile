const KEY='tekchile-inv-v3';
const seed={products:[
{id:1,sku:'NB-001',name:'Notebook Lenovo IdeaPad 15"',cat:'Notebooks',price:429990,stock:12,min:4},
{id:2,sku:'NB-002',name:'Notebook HP 14" Ryzen 5',cat:'Notebooks',price:519990,stock:3,min:4},
{id:3,sku:'MN-010',name:'Monitor LG 24" Full HD',cat:'Monitores',price:109990,stock:20,min:5},
{id:4,sku:'PR-021',name:'Mouse inalámbrico Logitech M170',cat:'Periféricos',price:9990,stock:0,min:10},
{id:5,sku:'PR-022',name:'Teclado mecánico Redragon',cat:'Periféricos',price:34990,stock:8,min:5},
{id:6,sku:'RD-031',name:'Router Wi-Fi 6 TP-Link',cat:'Redes',price:59990,stock:2,min:3},
{id:7,sku:'AL-040',name:'Disco SSD 1TB Kingston',cat:'Almacenamiento',price:64990,stock:15,min:6},
{id:8,sku:'NB-003',name:'Notebook ASUS Vivobook 16" i5',cat:'Notebooks',price:599990,stock:6,min:3},
{id:9,sku:'NB-004',name:'MacBook Air 13" M2',cat:'Notebooks',price:1099990,stock:2,min:2},
{id:10,sku:'MN-011',name:'Monitor Samsung 27" Curvo',cat:'Monitores',price:179990,stock:9,min:4},
{id:11,sku:'MN-012',name:'Monitor Dell 24" IPS',cat:'Monitores',price:139990,stock:1,min:4},
{id:12,sku:'PR-023',name:'Webcam Logitech C920 HD',cat:'Periféricos',price:54990,stock:11,min:4},
{id:13,sku:'PR-024',name:'Audífonos HyperX Cloud Stinger',cat:'Periféricos',price:44990,stock:7,min:5},
{id:14,sku:'PR-025',name:'Mouse gamer Logitech G203',cat:'Periféricos',price:19990,stock:25,min:8},
{id:15,sku:'RD-032',name:'Switch 8 puertos Gigabit TP-Link',cat:'Redes',price:17990,stock:14,min:5},
{id:16,sku:'RD-033',name:'Cable de red Cat6 10m',cat:'Redes',price:6990,stock:0,min:15},
{id:17,sku:'AL-041',name:'Pendrive 64GB SanDisk',cat:'Almacenamiento',price:7990,stock:40,min:15},
{id:18,sku:'AL-042',name:'Disco duro externo 2TB Seagate',cat:'Almacenamiento',price:74990,stock:5,min:4},
{id:19,sku:'AC-050',name:'Mochila para notebook 15.6"',cat:'Accesorios',price:24990,stock:18,min:6},
{id:20,sku:'AC-051',name:'Cargador USB-C 65W',cat:'Accesorios',price:29990,stock:3,min:6},
{id:21,sku:'AC-052',name:'Hub USB-C 7 en 1',cat:'Accesorios',price:32990,stock:10,min:4},
{id:22,sku:'IM-060',name:'Impresora multifuncional Epson L3250',cat:'Impresión',price:189990,stock:4,min:2}],
moves:[],nid:151};
const PF={Notebooks:'NB',Monitores:'MN','Periféricos':'PR',Redes:'RD',Almacenamiento:'AL',Accesorios:'AC','Impresión':'IM',Componentes:'CP',Celulares:'CL',Audio:'AU',Gaming:'GM',Seguridad:'SG'};
`Notebooks|Notebook Acer Aspire 5 15″ i5|549990
Notebooks|Notebook HP Pavilion 15″ Ryzen 7|649990
Notebooks|Notebook Lenovo ThinkPad E14 i5|749990
Notebooks|Notebook Dell Inspiron 15 i7|799990
Notebooks|Notebook ASUS TUF Gaming F15 RTX 4050|999990
Notebooks|Notebook MSI Modern 14 i5|579990
Notebooks|Notebook Lenovo LOQ 15 RTX 4060|1199990
Notebooks|Notebook HP 250 G9 Celeron|289990
Notebooks|Chromebook Acer 314|219990
Notebooks|MacBook Pro 14″ M3|1899990
Monitores|Monitor Samsung 32″ 4K UHD|319990
Monitores|Monitor LG UltraGear 27″ 144Hz|229990
Monitores|Monitor ASUS ProArt 27″|399990
Monitores|Monitor AOC 22″ Full HD|79990
Monitores|Monitor Philips 24″ IPS 75Hz|99990
Monitores|Monitor MSI 27″ 165Hz Curvo|219990
Monitores|Monitor Dell UltraSharp 27″ QHD|389990
Monitores|Monitor BenQ 24″ Eye-Care|129990
Monitores|Monitor Gigabyte 34″ Ultrawide|329990
Monitores|Monitor portátil ASUS 15.6″ USB-C|149990
Periféricos|Teclado Logitech K380 Bluetooth|34990
Periféricos|Teclado Logitech MX Keys|109990
Periféricos|Teclado HyperX Alloy Origins|89990
Periféricos|Teclado Genius USB básico|7990
Periféricos|Mouse Logitech MX Master 3S|99990
Periféricos|Mouse Razer DeathAdder Essential|24990
Periféricos|Mouse Genius óptico USB|3990
Periféricos|Combo teclado y mouse inalámbrico Logitech MK270|24990
Periféricos|Webcam Logitech C270 HD|27990
Periféricos|Audífonos Logitech H390 USB|39990
Periféricos|Audífonos Sony WH-CH520|44990
Periféricos|Parlantes Logitech Z313 2.1|44990
Periféricos|Micrófono HyperX SoloCast|49990
Periféricos|Pad mouse XL Redragon|9990
Redes|Router TP-Link Archer AX55|79990
Redes|Router ASUS RT-AX88U|249990
Redes|Access Point Ubiquiti UniFi U6 Lite|119990
Redes|Switch 16 puertos Gigabit TP-Link|49990
Redes|Switch 24 puertos Gigabit D-Link|89990
Redes|Repetidor Wi-Fi TP-Link RE305|27990
Redes|Adaptador USB Wi-Fi TP-Link Archer T3U|14990
Redes|Cable de red Cat6 3m|2990
Redes|Cable de red Cat6 20m|11990
Redes|Patch panel 24 puertos Cat6|29990
Almacenamiento|Disco SSD 500GB Kingston NV2|39990
Almacenamiento|Disco SSD 2TB Samsung 990 EVO|169990
Almacenamiento|Disco SSD externo 1TB Samsung T7|99990
Almacenamiento|Disco duro 4TB Seagate Barracuda|89990
Almacenamiento|Memoria microSD 128GB SanDisk|12990
Almacenamiento|Pendrive 128GB Kingston DataTraveler|11990
Almacenamiento|Pendrive 32GB HP|4990
Almacenamiento|Disco duro externo 1TB WD Elements|54990
Almacenamiento|Disco SSD M.2 1TB WD Blue|74990
Almacenamiento|NAS Synology DS223 2 bahías|259990
Accesorios|Soporte para notebook aluminio|17990
Accesorios|Cooler base para notebook|19990
Accesorios|Hub USB 3.0 4 puertos|9990
Accesorios|Adaptador USB-C a HDMI|12990
Accesorios|Cable HDMI 2.0 2m|5990
Accesorios|Cable USB-C a USB-C 1m|6990
Accesorios|Cable DisplayPort 1.4 1.8m|9990
Accesorios|Cargador universal notebook 90W|29990
Accesorios|Batería externa Anker 10.000 mAh|24990
Accesorios|Funda notebook 14″ neopreno|9990
Accesorios|Regleta 6 salidas con protección|12990
Accesorios|UPS APC 650VA|59990
Impresión|Impresora láser HP LaserJet M111w|99990
Impresión|Impresora multifuncional HP Smart Tank 580|229990
Impresión|Impresora Brother HL-L2350DW|139990
Impresión|Impresora de etiquetas Zebra GK420t|289990
Impresión|Tinta Epson 544 negro|11990
Impresión|Tinta Epson 544 color (set)|29990
Impresión|Tóner HP 105A negro|44990
Impresión|Papel fotocopia carta resma 500 hojas|4990
Componentes|Procesador AMD Ryzen 5 5600|119990
Componentes|Procesador AMD Ryzen 7 7700X|259990
Componentes|Procesador Intel Core i5-13400F|159990
Componentes|Procesador Intel Core i7-13700K|329990
Componentes|Placa madre ASUS Prime B550M|99990
Componentes|Placa madre MSI B760M Gaming|119990
Componentes|Memoria RAM 16GB DDR4 3200 Kingston|39990
Componentes|Memoria RAM 32GB DDR5 5600 Corsair|109990
Componentes|Tarjeta de video NVIDIA RTX 4060 8GB|329990
Componentes|Tarjeta de video AMD RX 7600 8GB|279990
Componentes|Fuente de poder 650W 80+ Bronze Corsair|64990
Componentes|Gabinete NZXT H510|79990
Componentes|Cooler CPU Cooler Master Hyper 212|34990
Componentes|Pasta térmica Arctic MX-4|6990
Celulares|Samsung Galaxy A15 128GB|169990
Celulares|Samsung Galaxy A35 5G 128GB|279990
Celulares|Samsung Galaxy S24 256GB|749990
Celulares|iPhone 15 128GB|799990
Celulares|iPhone 13 128GB reacondicionado|449990
Celulares|Xiaomi Redmi Note 13 256GB|199990
Celulares|Xiaomi Redmi 13C 128GB|109990
Celulares|Motorola Moto G54 5G|179990
Celulares|Tablet Samsung Galaxy Tab A9|139990
Celulares|Tablet Lenovo Tab M10 Plus|149990
Audio|Audífonos Sony WH-1000XM5|329990
Audio|Audífonos Apple AirPods 2da gen|109990
Audio|Audífonos JBL Tune 510BT|34990
Audio|Audífonos in-ear Xiaomi Redmi Buds 4|19990
Audio|Parlante JBL Flip 6|109990
Audio|Parlante JBL Go 3|29990
Audio|Barra de sonido Samsung HW-C400|99990
Audio|Micrófono Blue Yeti USB|139990
Gaming|Silla gamer Cougar Armor One|179990
Gaming|Audífonos gamer HyperX Cloud II|79990
Gaming|Control Xbox inalámbrico|59990
Gaming|Control PlayStation DualSense|69990
Gaming|Consola PlayStation 5 Slim|549990
Gaming|Consola Nintendo Switch OLED|319990
Gaming|Teclado gamer Redragon Kumara|34990
Gaming|Mouse gamer Razer Viper Mini|29990
Gaming|Mousepad gamer Razer Goliathus|19990
Gaming|Volante Logitech G29|299990
Gaming|Capturadora Elgato HD60 X|169990
Gaming|Escritorio gamer 140cm con luces LED|89990
Seguridad|Cámara IP TP-Link Tapo C200|24990
Seguridad|Cámara IP Tapo C310 exterior|44990
Seguridad|Cámara Imou Ranger 2 Wi-Fi|29990
Seguridad|Kit 4 cámaras CCTV Hikvision con DVR|229990
Seguridad|DVR 8 canales Hikvision|89990
Seguridad|Disco duro 2TB Seagate SkyHawk|69990
Seguridad|Timbre inteligente Ezviz DB1|79990
Seguridad|Cerradura digital Samsung SHP|199990
Seguridad|Lector biométrico ZKTeco|99990
Seguridad|Sensor de movimiento Wi-Fi Tuya|12990`.split('\n').forEach((l,i)=>{const[c,n,p]=l.split('|'),h=(i*37+11)%100;seed.products.push({id:23+i,sku:PF[c]+'-'+(100+i),name:n,cat:c,price:+p,stock:h<8?0:h<22?1+i%4:5+h%30,min:4+i%4})});
