/**
 Copyright (c) 2023, Xgrid Inc, http://xgrid.co

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

 //component imports
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Careers from './pages/careers/careers';

//style import
import './App.css';

const App = ()=> {
  return (
    <div >
      <Header />
      <Careers />
      <Footer />
    </div>
  );
}

export default App;
