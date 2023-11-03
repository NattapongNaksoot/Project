import Vue from 'vue'
import Router from 'vue-router'

// Index
import Index from '@/components/biomes/Index'

// Electrolux
import ElectroluxIndex from '@/components/biomes/Index/IndexElectrolux'
import ElectroluxCreate from '@/components/biomes/Create/CreateElectrolux'
import ElectroluxEdit from '@/components/biomes/Edit/EditElectrolux'
import ElectroluxShow from '@/components/biomes/Show/ShowElectrolux'

// Philips
import PhilipsIndex from '@/components/biomes/Index/IndexPhilips'
import PhilipsCreate from '@/components/biomes/Create/CreatePhilips'
import PhilipsEdit from '@/components/biomes/Edit/EditPhilips'
import PhilipsShow from '@/components/biomes/Show/ShowPhilips'

// Tefal
import TefalIndex from '@/components/biomes/Index/IndexTefal'
import TefalCreate from '@/components/biomes/Create/CreateTefal'
import TefalEdit from '@/components/biomes/Edit/EditTefal'
import TefalShow from '@/components/biomes/Show/ShowTefal'

// Xiaomi
import XiaomiIndex from '@/components/biomes/Index/IndexXiaomi'
import XiaomiCreate from '@/components/biomes/Create/CreateXiaomi'
import XiaomiEdit from '@/components/biomes/Edit/EditXiaomi'
import XiaomiShow from '@/components/biomes/Show/ShowXiaomi'

//Aqatic
import AquaticIndex from '@/components/biomes/Index/IndexAquatic'
import AquaticCreate from '@/components/biomes/Create/CreateAquatic'
import AquaticEdit from '@/components/biomes/Edit/EditAquatic'
import AquaticShow from '@/components/biomes/Show/ShowAquatic'

//Tropical
import TropicalIndex from '@/components/biomes/Index/IndexTropical'
import TropicalCreate from '@/components/biomes/Create/CreateTropical'
import TropicalEdit from '@/components/biomes/Edit/EditTropical'
import TropicalShow from '@/components/biomes/Show/ShowTropical'

//Savanna
import SavannaIndex from '@/components/biomes/Index/IndexSavanna'
import SavannaCreate from '@/components/biomes/Create/CreateSavanna'
import SavannaEdit from '@/components/biomes/Edit/EditSavanna'
import SavannaShow from '@/components/biomes/Show/ShowSavanna'

//Trundra
import TrundraIndex from '@/components/biomes/Index/IndexTrundra'
import TrundraCreate from '@/components/biomes/Create/CreateTrundra'
import TrundraEdit from '@/components/biomes/Edit/EditTrundra'
import TrundraShow from '@/components/biomes/Show/ShowTrundra'

//Grassland
import GrasslandIndex from '@/components/biomes/Index/IndexGrassland'
import GrasslandCreate from '@/components/biomes/Create/CreateGrassland'
import GrasslandEdit from '@/components/biomes/Edit/EditGrassland'
import GrasslandShow from '@/components/biomes/Show/ShowGrassland'


Vue.use(Router)

export default new Router({
  routes: [
    // Index
    {
      path: '/index',
      name: 'index',
      component: Index
    },

    // Electrolux
    {
      path: '/electroluxs',
      name: 'electroluxs',
      component: ElectroluxIndex
    },
    {
      path: '/electrolux/create',
      name: 'electrolux-create',
      component: ElectroluxCreate
    },
    {
      path: '/electrolux/edit/:electroluxId',
      name: 'electrolux-edit',
      component: ElectroluxEdit
    },
    {
      path: '/electrolux/:electroluxId',
      name: 'electrolux',
      component: ElectroluxShow
    },

    // Philips
    {
      path: '/philipss',
      name: 'philipss',
      component: PhilipsIndex
    },
    {
      path: '/philips/create',
      name: 'philips-create',
      component: PhilipsCreate
    },
    {
      path: '/philips/edit/:philipsId',
      name: 'philips-edit',
      component: PhilipsEdit
    },
    {
      path: '/philips/:philipsId',
      name: 'philips',
      component: PhilipsShow
    },

    // Tefal
    {
      path: '/tefals',
      name: 'tefals',
      component: TefalIndex
    },
    {
      path: '/tefal/create',
      name: 'tefal-create',
      component: TefalCreate
    },
    {
      path: '/tefal/edit/:tefalId',
      name: 'tefal-edit',
      component: TefalEdit
    },
    {
      path: '/tefal/:tefalId',
      name: 'tefal',
      component: TefalShow
    },

    // Xiaomi
    {
      path: '/xiaomis',
      name: 'xiaomis',
      component: XiaomiIndex
    },
    {
      path: '/xiaomi/create',
      name: 'xiaomi-create',
      component: XiaomiCreate
    },
    {
      path: '/xiaomi/edit/:xiaomiId',
      name: 'xiaomi-edit',
      component: XiaomiEdit
    },
    {
      path: '/xiaomi/:xiaomiId',
      name: 'xiaomi',
      component: XiaomiShow
    },


    //Aquatic//
    {
      path: '/aquatics',
      name: 'aquatics',
      component: AquaticIndex
    },
    {
      path: '/aquatic/create',
      name: 'aquatic-create',
      component: AquaticCreate
    },
    {
      path: '/aquatic/edit/:aquaticId',
      name: 'aquatic-edit',
      component: AquaticEdit
    },
    {
      path: '/aquatic/:aquaticId',
      name: 'aquatic',
      component: AquaticShow
    },

    //Tropical
    {
      path: '/tropicals',
      name: 'tropicals',
      component: TropicalIndex
    },
    {
      path: '/tropical/create',
      name: 'tropical-create',
      component: TropicalCreate
    },
    {
      path: '/tropical/edit/:tropicalId',
      name: 'tropical-edit',
      component: TropicalEdit
    },
    {
      path: '/tropical/:tropicalId',
      name: 'tropical',
      component: TropicalShow
    },

    //Savanna
    {
      path: '/savannas',
      name: 'savannas',
      component: SavannaIndex
    },
    {
      path: '/savanna/create',
      name: 'savanna-create',
      component: SavannaCreate
    },
    {
      path: '/savanna/edit/:savannaId',
      name: 'savanna-edit',
      component: SavannaEdit
    },
    {
      path: '/savanna/:savannaId',
      name: 'savanna',
      component: SavannaShow
    },

    //Trundra
    {
      path: '/trundras',
      name: 'trundras',
      component: TrundraIndex
    },
    {
      path: '/trundra/create',
      name: 'trundra-create',
      component: TrundraCreate
    },
    {
      path: '/trundra/edit/:trundraId',
      name: 'trundra-edit',
      component: TrundraEdit
    },
    {
      path: '/trundra/:trundraId',
      name: 'trundra',
      component: TrundraShow
    },

    //Grassland
    {
      path: '/grasslands',
      name: 'grasslands',
      component: GrasslandIndex
    },
    {
      path: '/grassland/create',
      name: 'grassland-create',
      component: GrasslandCreate
    },
    {
      path: '/grassland/edit/:grasslandId',
      name: 'grassland-edit',
      component: GrasslandEdit
    },
    {
      path: '/grassland/:grasslandId',
      name: 'grassland',
      component: GrasslandShow
    },
   
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    //  },
  ]
})
