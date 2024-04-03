function loadDistricts() {
    var stateSelect = document.getElementById("state");
    var districtSelect = document.getElementById("district");
    var selectedState = stateSelect.options[stateSelect.selectedIndex].value;

    // Clear existing options
    districtSelect.innerHTML = '';

    if (selectedState === "Andhra Pradesh") {
        districtSelect.innerHTML += '<option value="Anantapur">Anantapur</option>';
        districtSelect.innerHTML += '<option value="Chittoor">Chittoor</option>';
        districtSelect.innerHTML += '<option value="East Godavari">East Godavari</option>';
        districtSelect.innerHTML += '<option value="Guntur">Guntur</option>';
        districtSelect.innerHTML += '<option value="Krishna">Krishna</option>';
        districtSelect.innerHTML += '<option value="Kurnool">Kurnool</option>';
        districtSelect.innerHTML += '<option value="Nellore">Nellore</option>';
        districtSelect.innerHTML += '<option value="Prakasam">Prakasam</option>';
        districtSelect.innerHTML += '<option value="Srikakulam">Srikakulam</option>';
        districtSelect.innerHTML += '<option value="Visakhapatnam">Visakhapatnam</option>';
        districtSelect.innerHTML += '<option value="Vizianagaram">Vizianagaram</option>';
        districtSelect.innerHTML += '<option value="West Godavari">West Godavari</option>';
        // Add more districts of Andhra Pradesh as needed
    } else if (selectedState === "Arunachal Pradesh") {
        districtSelect.innerHTML += '<option value="Tawang">Tawang</option>';
        districtSelect.innerHTML += '<option value="West Kameng">West Kameng</option>';
        districtSelect.innerHTML += '<option value="East Kameng">East Kameng</option>';
        districtSelect.innerHTML += '<option value="Papum Pare">Papum Pare</option>';
        districtSelect.innerHTML += '<option value="Kurung Kumey">Kurung Kumey</option>';
        districtSelect.innerHTML += '<option value="Kra Daadi">Kra Daadi</option>';
        districtSelect.innerHTML += '<option value="West Siang">West Siang</option>';
        districtSelect.innerHTML += '<option value="East Siang">East Siang</option>';
        districtSelect.innerHTML += '<option value="Upper Siang">Upper Siang</option>';
        districtSelect.innerHTML += '<option value="Lower Siang">Lower Siang</option>';
        districtSelect.innerHTML += '<option value="Upper Subansiri">Upper Subansiri</option>';
        districtSelect.innerHTML += '<option value="Lower Subansiri">Lower Subansiri</option>';
        districtSelect.innerHTML += '<option value="West Kameng">West Kameng</option>';
        districtSelect.innerHTML += '<option value="East Kameng">East Kameng</option>';
        districtSelect.innerHTML += '<option value="Tirap">Tirap</option>';
        districtSelect.innerHTML += '<option value="Changlang">Changlang</option>';
        districtSelect.innerHTML += '<option value="Longding">Longding</option>';
        districtSelect.innerHTML += '<option value="Kamle">Kamle</option>';
        districtSelect.innerHTML += '<option value="Lepa Rada">Lepa Rada</option>';
        districtSelect.innerHTML += '<option value="Shi Yomi">Shi Yomi</option>';
        districtSelect.innerHTML += '<option value="Siang">Siang</option>';
        districtSelect.innerHTML += '<option value="Pakke Kessang">Pakke Kessang</option>';
        districtSelect.innerHTML += '<option value="Namsai">Namsai</option>';
        districtSelect.innerHTML += '<option value="Anjaw">Anjaw</option>';
        districtSelect.innerHTML += '<option value="Lohit">Lohit</option>';
        districtSelect.innerHTML += '<option value="Lower Dibang Valley">Lower Dibang Valley</option>';
        districtSelect.innerHTML += '<option value="Dibang Valley">Dibang Valley</option>';
        districtSelect.innerHTML += '<option value="Changlang">Changlang</option>';
        districtSelect.innerHTML += '<option value="Kamle">Kamle</option>';
        // Add more districts of Arunachal Pradesh as needed
    } else if (selectedState === "Assam") {
        districtSelect.innerHTML += '<option value="Baksa">Baksa</option>';
        districtSelect.innerHTML += '<option value="Barpeta">Barpeta</option>';
        districtSelect.innerHTML += '<option value="Biswanath">Biswanath</option>';
        districtSelect.innerHTML += '<option value="Bongaigaon">Bongaigaon</option>';
        districtSelect.innerHTML += '<option value="Cachar">Cachar</option>';
        districtSelect.innerHTML += '<option value="Charaideo">Charaideo</option>';
        districtSelect.innerHTML += '<option value="Chirang">Chirang</option>';
        districtSelect.innerHTML += '<option value="Darrang">Darrang</option>';
        districtSelect.innerHTML += '<option value="Dhemaji">Dhemaji</option>';
        districtSelect.innerHTML += '<option value="Dhubri">Dhubri</option>';
        districtSelect.innerHTML += '<option value="Dibrugarh">Dibrugarh</option>';
        districtSelect.innerHTML += '<option value="Dima Hasao">Dima Hasao</option>';
        districtSelect.innerHTML += '<option value="Goalpara">Goalpara</option>';
        districtSelect.innerHTML += '<option value="Golaghat">Golaghat</option>';
        districtSelect.innerHTML += '<option value="Hailakandi">Hailakandi</option>';
        districtSelect.innerHTML += '<option value="Hojai">Hojai</option>';
        districtSelect.innerHTML += '<option value="Jorhat">Jorhat</option>';
        districtSelect.innerHTML += '<option value="Kamrup">Kamrup</option>';
        districtSelect.innerHTML += '<option value="Kamrup Metropolitan">Kamrup Metropolitan</option>';
        districtSelect.innerHTML += '<option value="Karbi Anglong">Karbi Anglong</option>';
        districtSelect.innerHTML += '<option value="Karimganj">Karimganj</option>';
        districtSelect.innerHTML += '<option value="Kokrajhar">Kokrajhar</option>';
        districtSelect.innerHTML += '<option value="Lakhimpur">Lakhimpur</option>';
        districtSelect.innerHTML += '<option value="Majuli">Majuli</option>';
        districtSelect.innerHTML += '<option value="Morigaon">Morigaon</option>';
        districtSelect.innerHTML += '<option value="Nagaon">Nagaon</option>';
        districtSelect.innerHTML += '<option value="Nalbari">Nalbari</option>';
        districtSelect.innerHTML += '<option value="Sivasagar">Sivasagar</option>';
        districtSelect.innerHTML += '<option value="Sonitpur">Sonitpur</option>';
        districtSelect.innerHTML += '<option value="South Salmara-Mankachar">South Salmara-Mankachar</option>';
        districtSelect.innerHTML += '<option value="Tinsukia">Tinsukia</option>';
        districtSelect.innerHTML += '<option value="Udalguri">Udalguri</option>';
        districtSelect.innerHTML += '<option value="West Karbi Anglong">West Karbi Anglong</option>';
        // Add more districts of Assam as needed
    } else if (selectedState === "Bihar") {
        districtSelect.innerHTML += '<option value="Araria">Araria</option>';
        districtSelect.innerHTML += '<option value="Arwal">Arwal</option>';
        districtSelect.innerHTML += '<option value="Aurangabad">Aurangabad</option>';
        districtSelect.innerHTML += '<option value="Banka">Banka</option>';
        districtSelect.innerHTML += '<option value="Begusarai">Begusarai</option>';
        districtSelect.innerHTML += '<option value="Bhagalpur">Bhagalpur</option>';
        districtSelect.innerHTML += '<option value="Bhojpur">Bhojpur</option>';
        districtSelect.innerHTML += '<option value="Buxar">Buxar</option>';
        districtSelect.innerHTML += '<option value="Darbhanga">Darbhanga</option>';
        districtSelect.innerHTML += '<option value="East Champaran">East Champaran</option>';
        districtSelect.innerHTML += '<option value="Gaya">Gaya</option>';
        districtSelect.innerHTML += '<option value="Gopalganj">Gopalganj</option>';
        districtSelect.innerHTML += '<option value="Jamui">Jamui</option>';
        districtSelect.innerHTML += '<option value="Jehanabad">Jehanabad</option>';
        districtSelect.innerHTML += '<option value="Kaimur">Kaimur</option>';
        districtSelect.innerHTML += '<option value="Katihar">Katihar</option>';
        districtSelect.innerHTML += '<option value="Khagaria">Khagaria</option>';
        districtSelect.innerHTML += '<option value="Kishanganj">Kishanganj</option>';
        districtSelect.innerHTML += '<option value="Lakhisarai">Lakhisarai</option>';
        districtSelect.innerHTML += '<option value="Madhepura">Madhepura</option>';
        districtSelect.innerHTML += '<option value="Madhubani">Madhubani</option>';
        districtSelect.innerHTML += '<option value="Munger">Munger</option>';
        districtSelect.innerHTML += '<option value="Muzaffarpur">Muzaffarpur</option>';
        districtSelect.innerHTML += '<option value="Nalanda">Nalanda</option>';
        districtSelect.innerHTML += '<option value="Nawada">Nawada</option>';
        districtSelect.innerHTML += '<option value="Patna">Patna</option>';
        districtSelect.innerHTML += '<option value="Purnia">Purnia</option>';
        districtSelect.innerHTML += '<option value="Rohtas">Rohtas</option>';
        districtSelect.innerHTML += '<option value="Saharsa">Saharsa</option>';
        districtSelect.innerHTML += '<option value="Samastipur">Samastipur</option>';
        districtSelect.innerHTML += '<option value="Saran">Saran</option>';
        districtSelect.innerHTML += '<option value="Sheikhpura">Sheikhpura</option>';
        districtSelect.innerHTML += '<option value="Sheohar">Sheohar</option>';
        districtSelect.innerHTML += '<option value="Sitamarhi">Sitamarhi</option>';
        districtSelect.innerHTML += '<option value="Siwan">Siwan</option>';
        districtSelect.innerHTML += '<option value="Supaul">Supaul</option>';
        districtSelect.innerHTML += '<option value="Vaishali">Vaishali</option>';
        districtSelect.innerHTML += '<option value="West Champaran">West Champaran</option>';
        // Add more districts of Bihar as needed
    }
    // Add more states and their districts as needed
    else if (selectedState === "Chhattisgarh") {
        districtSelect.innerHTML += '<option value="Bastar">Bastar</option>';
        districtSelect.innerHTML += '<option value="Bijapur">Bijapur</option>';
        districtSelect.innerHTML += '<option value="Bilaspur">Bilaspur</option>';
        districtSelect.innerHTML += '<option value="Dantewada">Dantewada</option>';
        districtSelect.innerHTML += '<option value="Dhamtari">Dhamtari</option>';
        districtSelect.innerHTML += '<option value="Durg">Durg</option>';
        districtSelect.innerHTML += '<option value="Gariaband">Gariaband</option>';
        districtSelect.innerHTML += '<option value="Janjgir-Champa">Janjgir-Champa</option>';
        districtSelect.innerHTML += '<option value="Jashpur">Jashpur</option>';
        districtSelect.innerHTML += '<option value="Kanker">Kanker</option>';
        districtSelect.innerHTML += '<option value="Kondagaon">Kondagaon</option>';
        districtSelect.innerHTML += '<option value="Korba">Korba</option>';
        districtSelect.innerHTML += '<option value="Korea">Korea</option>';
        districtSelect.innerHTML += '<option value="Mahasamund">Mahasamund</option>';
        districtSelect.innerHTML += '<option value="Mungeli">Mungeli</option>';
        districtSelect.innerHTML += '<option value="Narayanpur">Narayanpur</option>';
        districtSelect.innerHTML += '<option value="Raigarh">Raigarh</option>';
        districtSelect.innerHTML += '<option value="Raipur">Raipur</option>';
        districtSelect.innerHTML += '<option value="Rajnandgaon">Rajnandgaon</option>';
        districtSelect.innerHTML += '<option value="Sukma">Sukma</option>';
        districtSelect.innerHTML += '<option value="Surajpur">Surajpur</option>';
        districtSelect.innerHTML += '<option value="Surguja">Surguja</option>';
        // Add more districts of Chhattisgarh as needed
    } else if (selectedState === "Goa") {
        districtSelect.innerHTML += '<option value="North Goa">North Goa</option>';
        districtSelect.innerHTML += '<option value="South Goa">South Goa</option>';
        // Add more districts of Goa as needed
    } else if (selectedState === "Gujarat") {
        districtSelect.innerHTML += '<option value="Ahmedabad">Ahmedabad</option>';
        districtSelect.innerHTML += '<option value="Amreli">Amreli</option>';
        districtSelect.innerHTML += '<option value="Anand">Anand</option>';
        districtSelect.innerHTML += '<option value="Aravalli">Aravalli</option>';
        districtSelect.innerHTML += '<option value="Banaskantha">Banaskantha</option>';
        districtSelect.innerHTML += '<option value="Bharuch">Bharuch</option>';
        districtSelect.innerHTML += '<option value="Bhavnagar">Bhavnagar</option>';
        districtSelect.innerHTML += '<option value="Botad">Botad</option>';
        districtSelect.innerHTML += '<option value="Chhota Udaipur">Chhota Udaipur</option>';
        districtSelect.innerHTML += '<option value="Dahod">Dahod</option>';
        districtSelect.innerHTML += '<option value="Dang">Dang</option>';
        districtSelect.innerHTML += '<option value="Devbhumi Dwarka">Devbhumi Dwarka</option>';
        districtSelect.innerHTML += '<option value="Gandhinagar">Gandhinagar</option>';
        districtSelect.innerHTML += '<option value="Gir Somnath">Gir Somnath</option>';
        districtSelect.innerHTML += '<option value="Jamnagar">Jamnagar</option>';
        districtSelect.innerHTML += '<option value="Junagadh">Junagadh</option>';
        districtSelect.innerHTML += '<option value="Kheda">Kheda</option>';
        districtSelect.innerHTML += '<option value="Kutch">Kutch</option>';
        districtSelect.innerHTML += '<option value="Mahisagar">Mahisagar</option>';
        districtSelect.innerHTML += '<option value="Mehsana">Mehsana</option>';
        districtSelect.innerHTML += '<option value="Morbi">Morbi</option>';
        districtSelect.innerHTML += '<option value="Narmada">Narmada</option>';
        districtSelect.innerHTML += '<option value="Navsari">Navsari</option>';
        districtSelect.innerHTML += '<option value="Panchmahal">Panchmahal</option>';
        districtSelect.innerHTML += '<option value="Patan">Patan</option>';
        districtSelect.innerHTML += '<option value="Porbandar">Porbandar</option>';
        districtSelect.innerHTML += '<option value="Rajkot">Rajkot</option>';
        districtSelect.innerHTML += '<option value="Sabarkantha">Sabarkantha</option>';
        districtSelect.innerHTML += '<option value="Surat">Surat</option>';
        districtSelect.innerHTML += '<option value="Surendranagar">Surendranagar</option>';
        districtSelect.innerHTML += '<option value="Tapi">Tapi</option>';
        districtSelect.innerHTML += '<option value="Vadodara">Vadodara</option>';
        districtSelect.innerHTML += '<option value="Valsad">Valsad</option>';
        // Add more districts of Gujarat as needed
    }
    // Continue adding more states and their districts as required
    else if (selectedState === "Haryana") {
        districtSelect.innerHTML += '<option value="Ambala">Ambala</option>';
        districtSelect.innerHTML += '<option value="Bhiwani">Bhiwani</option>';
        districtSelect.innerHTML += '<option value="Charkhi Dadri">Charkhi Dadri</option>';
        districtSelect.innerHTML += '<option value="Faridabad">Faridabad</option>';
        districtSelect.innerHTML += '<option value="Fatehabad">Fatehabad</option>';
        districtSelect.innerHTML += '<option value="Gurugram">Gurugram</option>';
        districtSelect.innerHTML += '<option value="Hisar">Hisar</option>';
        districtSelect.innerHTML += '<option value="Jhajjar">Jhajjar</option>';
        districtSelect.innerHTML += '<option value="Jind">Jind</option>';
        districtSelect.innerHTML += '<option value="Kaithal">Kaithal</option>';
        districtSelect.innerHTML += '<option value="Karnal">Karnal</option>';
        districtSelect.innerHTML += '<option value="Kurukshetra">Kurukshetra</option>';
        districtSelect.innerHTML += '<option value="Mahendragarh">Mahendragarh</option>';
        districtSelect.innerHTML += '<option value="Nuh">Nuh</option>';
        districtSelect.innerHTML += '<option value="Palwal">Palwal</option>';
        districtSelect.innerHTML += '<option value="Panchkula">Panchkula</option>';
        districtSelect.innerHTML += '<option value="Panipat">Panipat</option>';
        districtSelect.innerHTML += '<option value="Rewari">Rewari</option>';
        districtSelect.innerHTML += '<option value="Rohtak">Rohtak</option>';
        districtSelect.innerHTML += '<option value="Sirsa">Sirsa</option>';
        districtSelect.innerHTML += '<option value="Sonipat">Sonipat</option>';
        districtSelect.innerHTML += '<option value="Yamunanagar">Yamunanagar</option>';
        // Add more districts of Haryana as needed
    } else if (selectedState === "Himachal Pradesh") {
        districtSelect.innerHTML += '<option value="Bilaspur">Bilaspur</option>';
        districtSelect.innerHTML += '<option value="Chamba">Chamba</option>';
        districtSelect.innerHTML += '<option value="Hamirpur">Hamirpur</option>';
        districtSelect.innerHTML += '<option value="Kangra">Kangra</option>';
        districtSelect.innerHTML += '<option value="Kinnaur">Kinnaur</option>';
        districtSelect.innerHTML += '<option value="Kullu">Kullu</option>';
        districtSelect.innerHTML += '<option value="Lahaul and Spiti">Lahaul and Spiti</option>';
        districtSelect.innerHTML += '<option value="Mandi">Mandi</option>';
        districtSelect.innerHTML += '<option value="Shimla">Shimla</option>';
        districtSelect.innerHTML += '<option value="Sirmaur">Sirmaur</option>';
        districtSelect.innerHTML += '<option value="Solan">Solan</option>';
        districtSelect.innerHTML += '<option value="Una">Una</option>';
        // Add more districts of Himachal Pradesh as needed
    } else if (selectedState === "Jammu and Kashmir") {
        districtSelect.innerHTML += '<option value="Anantnag">Anantnag</option>';
        districtSelect.innerHTML += '<option value="Bandipora">Bandipora</option>';
        districtSelect.innerHTML += '<option value="Baramulla">Baramulla</option>';
        districtSelect.innerHTML += '<option value="Budgam">Budgam</option>';
        districtSelect.innerHTML += '<option value="Doda">Doda</option>';
        districtSelect.innerHTML += '<option value="Ganderbal">Ganderbal</option>';
        districtSelect.innerHTML += '<option value="Jammu">Jammu</option>';
        districtSelect.innerHTML += '<option value="Kathua">Kathua</option>';
        districtSelect.innerHTML += '<option value="Kishtwar">Kishtwar</option>';
        districtSelect.innerHTML += '<option value="Kulgam">Kulgam</option>';
        districtSelect.innerHTML += '<option value="Kupwara">Kupwara</option>';
        districtSelect.innerHTML += '<option value="Poonch">Poonch</option>';
        districtSelect.innerHTML += '<option value="Pulwama">Pulwama</option>';
        districtSelect.innerHTML += '<option value="Rajouri">Rajouri</option>';
        districtSelect.innerHTML += '<option value="Ramban">Ramban</option>';
        districtSelect.innerHTML += '<option value="Reasi">Reasi</option>';
        districtSelect.innerHTML += '<option value="Samba">Samba</option>';
        districtSelect.innerHTML += '<option value="Shopian">Shopian</option>';
        districtSelect.innerHTML += '<option value="Srinagar">Srinagar</option>';
        districtSelect.innerHTML += '<option value="Udhampur">Udhampur</option>';
        // Add more districts of Jammu and Kashmir as needed
    }
    // Continue adding more states and their districts as required
    else if (selectedState === "Jharkhand") {
        districtSelect.innerHTML += '<option value="Bokaro">Bokaro</option>';
        districtSelect.innerHTML += '<option value="Chatra">Chatra</option>';
        districtSelect.innerHTML += '<option value="Deoghar">Deoghar</option>';
        districtSelect.innerHTML += '<option value="Dhanbad">Dhanbad</option>';
        districtSelect.innerHTML += '<option value="Dumka">Dumka</option>';
        districtSelect.innerHTML += '<option value="East Singhbhum">East Singhbhum</option>';
        districtSelect.innerHTML += '<option value="Garhwa">Garhwa</option>';
        districtSelect.innerHTML += '<option value="Giridih">Giridih</option>';
        districtSelect.innerHTML += '<option value="Godda">Godda</option>';
        districtSelect.innerHTML += '<option value="Gumla">Gumla</option>';
        districtSelect.innerHTML += '<option value="Hazaribagh">Hazaribagh</option>';
        districtSelect.innerHTML += '<option value="Jamtara">Jamtara</option>';
        districtSelect.innerHTML += '<option value="Khunti">Khunti</option>';
        districtSelect.innerHTML += '<option value="Koderma">Koderma</option>';
        districtSelect.innerHTML += '<option value="Latehar">Latehar</option>';
        districtSelect.innerHTML += '<option value="Lohardaga">Lohardaga</option>';
        districtSelect.innerHTML += '<option value="Pakur">Pakur</option>';
        districtSelect.innerHTML += '<option value="Palamu">Palamu</option>';
        districtSelect.innerHTML += '<option value="Ramgarh">Ramgarh</option>';
        districtSelect.innerHTML += '<option value="Ranchi">Ranchi</option>';
        districtSelect.innerHTML += '<option value="Sahibganj">Sahibganj</option>';
        districtSelect.innerHTML += '<option value="Seraikela Kharsawan">Seraikela Kharsawan</option>';
        districtSelect.innerHTML += '<option value="Simdega">Simdega</option>';
        districtSelect.innerHTML += '<option value="West Singhbhum">West Singhbhum</option>';
        // Add more districts of Jharkhand as needed
    } else if (selectedState === "Karnataka") {
        districtSelect.innerHTML += '<option value="Bagalkot">Bagalkot</option>';
        districtSelect.innerHTML += '<option value="Ballari">Ballari</option>';
        districtSelect.innerHTML += '<option value="Belagavi">Belagavi</option>';
        districtSelect.innerHTML += '<option value="Bengaluru Rural">Bengaluru Rural</option>';
        districtSelect.innerHTML += '<option value="Bengaluru Urban">Bengaluru Urban</option>';
        districtSelect.innerHTML += '<option value="Bidar">Bidar</option>';
        districtSelect.innerHTML += '<option value="Chamarajanagar">Chamarajanagar</option>';
        districtSelect.innerHTML += '<option value="Chikballapur">Chikballapur</option>';
        districtSelect.innerHTML += '<option value="Chikkamagaluru">Chikkamagaluru</option>';
        districtSelect.innerHTML += '<option value="Chitradurga">Chitradurga</option>';
        districtSelect.innerHTML += '<option value="Dakshina Kannada">Dakshina Kannada</option>';
        districtSelect.innerHTML += '<option value="Davangere">Davangere</option>';
        districtSelect.innerHTML += '<option value="Dharwad">Dharwad</option>';
        districtSelect.innerHTML += '<option value="Gadag">Gadag</option>';
        districtSelect.innerHTML += '<option value="Hassan">Hassan</option>';
        districtSelect.innerHTML += '<option value="Haveri">Haveri</option>';
        districtSelect.innerHTML += '<option value="Kalaburagi">Kalaburagi</option>';
        districtSelect.innerHTML += '<option value="Kodagu">Kodagu</option>';
        districtSelect.innerHTML += '<option value="Kolar">Kolar</option>';
        districtSelect.innerHTML += '<option value="Koppal">Koppal</option>';
        districtSelect.innerHTML += '<option value="Mandya">Mandya</option>';
        districtSelect.innerHTML += '<option value="Mysuru">Mysuru</option>';
        districtSelect.innerHTML += '<option value="Raichur">Raichur</option>';
        districtSelect.innerHTML += '<option value="Ramanagara">Ramanagara</option>';
        districtSelect.innerHTML += '<option value="Shivamogga">Shivamogga</option>';
        districtSelect.innerHTML += '<option value="Tumakuru">Tumakuru</option>';
        districtSelect.innerHTML += '<option value="Udupi">Udupi</option>';
        districtSelect.innerHTML += '<option value="Uttara Kannada">Uttara Kannada</option>';
        districtSelect.innerHTML += '<option value="Vijayapura">Vijayapura</option>';
        districtSelect.innerHTML += '<option value="Yadgir">Yadgir</option>';
        // Add more districts of Karnataka as needed
    }
    // Continue adding more states and their districts as required
    else if (selectedState === "Kerala") {
        districtSelect.innerHTML += '<option value="Alappuzha">Alappuzha</option>';
        districtSelect.innerHTML += '<option value="Ernakulam">Ernakulam</option>';
        districtSelect.innerHTML += '<option value="Idukki">Idukki</option>';
        districtSelect.innerHTML += '<option value="Kannur">Kannur</option>';
        districtSelect.innerHTML += '<option value="Kasaragod">Kasaragod</option>';
        districtSelect.innerHTML += '<option value="Kollam">Kollam</option>';
        districtSelect.innerHTML += '<option value="Kottayam">Kottayam</option>';
        districtSelect.innerHTML += '<option value="Kozhikode">Kozhikode</option>';
        districtSelect.innerHTML += '<option value="Malappuram">Malappuram</option>';
        districtSelect.innerHTML += '<option value="Palakkad">Palakkad</option>';
        districtSelect.innerHTML += '<option value="Pathanamthitta">Pathanamthitta</option>';
        districtSelect.innerHTML += '<option value="Thiruvananthapuram">Thiruvananthapuram</option>';
        districtSelect.innerHTML += '<option value="Thrissur">Thrissur</option>';
        districtSelect.innerHTML += '<option value="Wayanad">Wayanad</option>';
        // Add more districts of Kerala as needed
    } else if (selectedState === "Madhya Pradesh") {
        districtSelect.innerHTML += '<option value="Agar Malwa">Agar Malwa</option>';
        districtSelect.innerHTML += '<option value="Alirajpur">Alirajpur</option>';
        districtSelect.innerHTML += '<option value="Anuppur">Anuppur</option>';
        districtSelect.innerHTML += '<option value="Ashoknagar">Ashoknagar</option>';
        districtSelect.innerHTML += '<option value="Balaghat">Balaghat</option>';
        districtSelect.innerHTML += '<option value="Barwani">Barwani</option>';
        districtSelect.innerHTML += '<option value="Betul">Betul</option>';
        districtSelect.innerHTML += '<option value="Bhind">Bhind</option>';
        districtSelect.innerHTML += '<option value="Bhopal">Bhopal</option>';
        districtSelect.innerHTML += '<option value="Burhanpur">Burhanpur</option>';
        districtSelect.innerHTML += '<option value="Chhatarpur">Chhatarpur</option>';
        districtSelect.innerHTML += '<option value="Chhindwara">Chhindwara</option>';
        districtSelect.innerHTML += '<option value="Damoh">Damoh</option>';
        districtSelect.innerHTML += '<option value="Datia">Datia</option>';
        districtSelect.innerHTML += '<option value="Dewas">Dewas</option>';
        districtSelect.innerHTML += '<option value="Dhar">Dhar</option>';
        districtSelect.innerHTML += '<option value="Dindori">Dindori</option>';
        districtSelect.innerHTML += '<option value="Guna">Guna</option>';
        districtSelect.innerHTML += '<option value="Gwalior">Gwalior</option>';
        districtSelect.innerHTML += '<option value="Harda">Harda</option>';
        districtSelect.innerHTML += '<option value="Hoshangabad">Hoshangabad</option>';
        districtSelect.innerHTML += '<option value="Indore">Indore</option>';
        districtSelect.innerHTML += '<option value="Jabalpur">Jabalpur</option>';
        districtSelect.innerHTML += '<option value="Jhabua">Jhabua</option>';
        districtSelect.innerHTML += '<option value="Katni">Katni</option>';
        districtSelect.innerHTML += '<option value="Khandwa">Khandwa</option>';
        districtSelect.innerHTML += '<option value="Khargone">Khargone</option>';
        districtSelect.innerHTML += '<option value="Mandla">Mandla</option>';
        districtSelect.innerHTML += '<option value="Mandsaur">Mandsaur</option>';
        districtSelect.innerHTML += '<option value="Morena">Morena</option>';
        districtSelect.innerHTML += '<option value="Narsinghpur">Narsinghpur</option>';
        districtSelect.innerHTML += '<option value="Neemuch">Neemuch</option>';
        districtSelect.innerHTML += '<option value="Panna">Panna</option>';
        districtSelect.innerHTML += '<option value="Raisen">Raisen</option>';
        districtSelect.innerHTML += '<option value="Rajgarh">Rajgarh</option>';
        districtSelect.innerHTML += '<option value="Ratlam">Ratlam</option>';
        districtSelect.innerHTML += '<option value="Rewa">Rewa</option>';
        districtSelect.innerHTML += '<option value="Sagar">Sagar</option>';
        districtSelect.innerHTML += '<option value="Satna">Satna</option>';
        districtSelect.innerHTML += '<option value="Sehore">Sehore</option>';
        districtSelect.innerHTML += '<option value="Seoni">Seoni</option>';
        districtSelect.innerHTML += '<option value="Shahdol">Shahdol</option>';
        districtSelect.innerHTML += '<option value="Shajapur">Shajapur</option>';
        districtSelect.innerHTML += '<option value="Sheopur">Sheopur</option>';
        districtSelect.innerHTML += '<option value="Shivpuri">Shivpuri</option>';
        districtSelect.innerHTML += '<option value="Sidhi">Sidhi</option>';
        districtSelect.innerHTML += '<option value="Singrauli">Singrauli</option>';
        districtSelect.innerHTML += '<option value="Tikamgarh">Tikamgarh</option>';
        districtSelect.innerHTML += '<option value="Ujjain">Ujjain</option>';
        districtSelect.innerHTML += '<option value="Umaria">Umaria</option>';
        districtSelect.innerHTML += '<option value="Vidisha">Vidisha</option>';
        // Add more districts of Madhya Pradesh as needed
    }
    // Continue adding more states and their districts as required
    else if (selectedState === "Maharashtra") {
        districtSelect.innerHTML += '<option value="Ahmednagar">Ahmednagar</option>';
        districtSelect.innerHTML += '<option value="Akola">Akola</option>';
        districtSelect.innerHTML += '<option value="Amravati">Amravati</option>';
        districtSelect.innerHTML += '<option value="Aurangabad">Aurangabad</option>';
        districtSelect.innerHTML += '<option value="Beed">Beed</option>';
        districtSelect.innerHTML += '<option value="Bhandara">Bhandara</option>';
        districtSelect.innerHTML += '<option value="Buldhana">Buldhana</option>';
        districtSelect.innerHTML += '<option value="Chandrapur">Chandrapur</option>';
        districtSelect.innerHTML += '<option value="Dhule">Dhule</option>';
        districtSelect.innerHTML += '<option value="Gadchiroli">Gadchiroli</option>';
        districtSelect.innerHTML += '<option value="Gondia">Gondia</option>';
        districtSelect.innerHTML += '<option value="Hingoli">Hingoli</option>';
        districtSelect.innerHTML += '<option value="Jalgaon">Jalgaon</option>';
        districtSelect.innerHTML += '<option value="Jalna">Jalna</option>';
        districtSelect.innerHTML += '<option value="Kolhapur">Kolhapur</option>';
        districtSelect.innerHTML += '<option value="Latur">Latur</option>';
        districtSelect.innerHTML += '<option value="Mumbai City">Mumbai City</option>';
        districtSelect.innerHTML += '<option value="Mumbai Suburban">Mumbai Suburban</option>';
        districtSelect.innerHTML += '<option value="Nagpur">Nagpur</option>';
        districtSelect.innerHTML += '<option value="Nanded">Nanded</option>';
        districtSelect.innerHTML += '<option value="Nandurbar">Nandurbar</option>';
        districtSelect.innerHTML += '<option value="Nashik">Nashik</option>';
        districtSelect.innerHTML += '<option value="Osmanabad">Osmanabad</option>';
        districtSelect.innerHTML += '<option value="Palghar">Palghar</option>';
        districtSelect.innerHTML += '<option value="Parbhani">Parbhani</option>';
        districtSelect.innerHTML += '<option value="Pune">Pune</option>';
        districtSelect.innerHTML += '<option value="Raigad">Raigad</option>';
        districtSelect.innerHTML += '<option value="Ratnagiri">Ratnagiri</option>';
        districtSelect.innerHTML += '<option value="Sangli">Sangli</option>';
        districtSelect.innerHTML += '<option value="Satara">Satara</option>';
        districtSelect.innerHTML += '<option value="Sindhudurg">Sindhudurg</option>';
        districtSelect.innerHTML += '<option value="Solapur">Solapur</option>';
        districtSelect.innerHTML += '<option value="Thane">Thane</option>';
        districtSelect.innerHTML += '<option value="Wardha">Wardha</option>';
        districtSelect.innerHTML += '<option value="Washim">Washim</option>';
        districtSelect.innerHTML += '<option value="Yavatmal">Yavatmal</option>';
        // Add more districts of Maharashtra as needed
    } else if (selectedState === "Manipur") {
        districtSelect.innerHTML += '<option value="Bishnupur">Bishnupur</option>';
        districtSelect.innerHTML += '<option value="Chandel">Chandel</option>';
        districtSelect.innerHTML += '<option value="Churachandpur">Churachandpur</option>';
        districtSelect.innerHTML += '<option value="Imphal East">Imphal East</option>';
        districtSelect.innerHTML += '<option value="Imphal West">Imphal West</option>';
        districtSelect.innerHTML += '<option value="Jiribam">Jiribam</option>';
        districtSelect.innerHTML += '<option value="Kakching">Kakching</option>';
        districtSelect.innerHTML += '<option value="Kamjong">Kamjong</option>';
        districtSelect.innerHTML += '<option value="Kangpokpi">Kangpokpi</option>';
        districtSelect.innerHTML += '<option value="Noney">Noney</option>';
        districtSelect.innerHTML += '<option value="Pherzawl">Pherzawl</option>';
        districtSelect.innerHTML += '<option value="Senapati">Senapati</option>';
        districtSelect.innerHTML += '<option value="Tamenglong">Tamenglong</option>';
        districtSelect.innerHTML += '<option value="Tengnoupal">Tengnoupal</option>';
        districtSelect.innerHTML += '<option value="Thoubal">Thoubal</option>';
        districtSelect.innerHTML += '<option value="Ukhrul">Ukhrul</option>';
        // Add more districts of Manipur as needed
    }
    // Continue adding more states and their districts as required
    else if (selectedState === "Meghalaya") {
        districtSelect.innerHTML += '<option value="East Garo Hills">East Garo Hills</option>';
        districtSelect.innerHTML += '<option value="East Jaintia Hills">East Jaintia Hills</option>';
        districtSelect.innerHTML += '<option value="East Khasi Hills">East Khasi Hills</option>';
        districtSelect.innerHTML += '<option value="North Garo Hills">North Garo Hills</option>';
        districtSelect.innerHTML += '<option value="Ri-Bhoi">Ri-Bhoi</option>';
        districtSelect.innerHTML += '<option value="South Garo Hills">South Garo Hills</option>';
        districtSelect.innerHTML += '<option value="South West Garo Hills">South West Garo Hills</option>';
        districtSelect.innerHTML += '<option value="South West Khasi Hills">South West Khasi Hills</option>';
        districtSelect.innerHTML += '<option value="West Garo Hills">West Garo Hills</option>';
        districtSelect.innerHTML += '<option value="West Jaintia Hills">West Jaintia Hills</option>';
        districtSelect.innerHTML += '<option value="West Khasi Hills">West Khasi Hills</option>';
        // Add more districts of Meghalaya as needed
    } else if (selectedState === "Mizoram") {
        districtSelect.innerHTML += '<option value="Aizawl">Aizawl</option>';
        districtSelect.innerHTML += '<option value="Champhai">Champhai</option>';
        districtSelect.innerHTML += '<option value="Kolasib">Kolasib</option>';
        districtSelect.innerHTML += '<option value="Lawngtlai">Lawngtlai</option>';
        districtSelect.innerHTML += '<option value="Lunglei">Lunglei</option>';
        districtSelect.innerHTML += '<option value="Mamit">Mamit</option>';
        districtSelect.innerHTML += '<option value="Saiha">Saiha</option>';
        districtSelect.innerHTML += '<option value="Serchhip">Serchhip</option>';
        // Add more districts of Mizoram as needed
    } else if (selectedState === "Nagaland") {
        districtSelect.innerHTML += '<option value="Dimapur">Dimapur</option>';
        districtSelect.innerHTML += '<option value="Kiphire">Kiphire</option>';
        districtSelect.innerHTML += '<option value="Kohima">Kohima</option>';
        districtSelect.innerHTML += '<option value="Longleng">Longleng</option>';
        districtSelect.innerHTML += '<option value="Mokokchung">Mokokchung</option>';
        districtSelect.innerHTML += '<option value="Mon">Mon</option>';
        districtSelect.innerHTML += '<option value="Peren">Peren</option>';
        districtSelect.innerHTML += '<option value="Phek">Phek</option>';
        districtSelect.innerHTML += '<option value="Tuensang">Tuensang</option>';
        districtSelect.innerHTML += '<option value="Wokha">Wokha</option>';
        districtSelect.innerHTML += '<option value="Zunheboto">Zunheboto</option>';
        // Add more districts of Nagaland as needed
    }
    // Continue adding more states and their districts as required
    else if (selectedState === "Odisha") {
        districtSelect.innerHTML += '<option value="Angul">Angul</option>';
        districtSelect.innerHTML += '<option value="Balangir">Balangir</option>';
        districtSelect.innerHTML += '<option value="Balasore">Balasore</option>';
        districtSelect.innerHTML += '<option value="Bargarh">Bargarh</option>';
        districtSelect.innerHTML += '<option value="Bhadrak">Bhadrak</option>';
        districtSelect.innerHTML += '<option value="Boudh">Boudh</option>';
        districtSelect.innerHTML += '<option value="Cuttack">Cuttack</option>';
        districtSelect.innerHTML += '<option value="Debagarh">Debagarh</option>';
        districtSelect.innerHTML += '<option value="Dhenkanal">Dhenkanal</option>';
        districtSelect.innerHTML += '<option value="Gajapati">Gajapati</option>';
        districtSelect.innerHTML += '<option value="Ganjam">Ganjam</option>';
        districtSelect.innerHTML += '<option value="Jagatsinghpur">Jagatsinghpur</option>';
        districtSelect.innerHTML += '<option value="Jajpur">Jajpur</option>';
        districtSelect.innerHTML += '<option value="Jharsuguda">Jharsuguda</option>';
        districtSelect.innerHTML += '<option value="Kalahandi">Kalahandi</option>';
        districtSelect.innerHTML += '<option value="Kandhamal">Kandhamal</option>';
        districtSelect.innerHTML += '<option value="Kendrapara">Kendrapara</option>';
        districtSelect.innerHTML += '<option value="Kendujhar">Kendujhar</option>';
        districtSelect.innerHTML += '<option value="Khurda">Khurda</option>';
        districtSelect.innerHTML += '<option value="Koraput">Koraput</option>';
        districtSelect.innerHTML += '<option value="Malkangiri">Malkangiri</option>';
        districtSelect.innerHTML += '<option value="Mayurbhanj">Mayurbhanj</option>';
        districtSelect.innerHTML += '<option value="Nabarangpur">Nabarangpur</option>';
        districtSelect.innerHTML += '<option value="Nayagarh">Nayagarh</option>';
        districtSelect.innerHTML += '<option value="Nuapada">Nuapada</option>';
        districtSelect.innerHTML += '<option value="Puri">Puri</option>';
        districtSelect.innerHTML += '<option value="Rayagada">Rayagada</option>';
        districtSelect.innerHTML += '<option value="Sambalpur">Sambalpur</option>';
        districtSelect.innerHTML += '<option value="Subarnapur">Subarnapur</option>';
        districtSelect.innerHTML += '<option value="Sundargarh">Sundargarh</option>';
        // Add more districts of Odisha as needed
    } else if (selectedState === "Punjab") {
        districtSelect.innerHTML += '<option value="Amritsar">Amritsar</option>';
        districtSelect.innerHTML += '<option value="Barnala">Barnala</option>';
        districtSelect.innerHTML += '<option value="Bathinda">Bathinda</option>';
        districtSelect.innerHTML += '<option value="Faridkot">Faridkot</option>';
        districtSelect.innerHTML += '<option value="Fatehgarh Sahib">Fatehgarh Sahib</option>';
        districtSelect.innerHTML += '<option value="Fazilka">Fazilka</option>';
        districtSelect.innerHTML += '<option value="Ferozepur">Ferozepur</option>';
        districtSelect.innerHTML += '<option value="Gurdaspur">Gurdaspur</option>';
        districtSelect.innerHTML += '<option value="Hoshiarpur">Hoshiarpur</option>';
        districtSelect.innerHTML += '<option value="Jalandhar">Jalandhar</option>';
        districtSelect.innerHTML += '<option value="Kapurthala">Kapurthala</option>';
        districtSelect.innerHTML += '<option value="Ludhiana">Ludhiana</option>';
        districtSelect.innerHTML += '<option value="Mansa">Mansa</option>';
        districtSelect.innerHTML += '<option value="Moga">Moga</option>';
        districtSelect.innerHTML += '<option value="Muktsar">Muktsar</option>';
        districtSelect.innerHTML += '<option value="Pathankot">Pathankot</option>';
        districtSelect.innerHTML += '<option value="Patiala">Patiala</option>';
        districtSelect.innerHTML += '<option value="Rupnagar">Rupnagar</option>';
        districtSelect.innerHTML += '<option value="Sahibzada Ajit Singh Nagar">Sahibzada Ajit Singh Nagar</option>';
        districtSelect.innerHTML += '<option value="Sangrur">Sangrur</option>';
        districtSelect.innerHTML += '<option value="Tarn Taran">Tarn Taran</option>';
        // Add more districts of Punjab as needed
    }
    // Continue adding more states and their districts as required
    else if (selectedState === "Rajasthan") {
        districtSelect.innerHTML += '<option value="Ajmer">Ajmer</option>';
        districtSelect.innerHTML += '<option value="Alwar">Alwar</option>';
        districtSelect.innerHTML += '<option value="Banswara">Banswara</option>';
        districtSelect.innerHTML += '<option value="Baran">Baran</option>';
        districtSelect.innerHTML += '<option value="Barmer">Barmer</option>';
        districtSelect.innerHTML += '<option value="Bharatpur">Bharatpur</option>';
        districtSelect.innerHTML += '<option value="Bhilwara">Bhilwara</option>';
        districtSelect.innerHTML += '<option value="Bikaner">Bikaner</option>';
        districtSelect.innerHTML += '<option value="Bundi">Bundi</option>';
        districtSelect.innerHTML += '<option value="Chittorgarh">Chittorgarh</option>';
        districtSelect.innerHTML += '<option value="Churu">Churu</option>';
        districtSelect.innerHTML += '<option value="Dausa">Dausa</option>';
        districtSelect.innerHTML += '<option value="Dholpur">Dholpur</option>';
        districtSelect.innerHTML += '<option value="Dungarpur">Dungarpur</option>';
        districtSelect.innerHTML += '<option value="Hanumangarh">Hanumangarh</option>';
        districtSelect.innerHTML += '<option value="Jaipur">Jaipur</option>';
        districtSelect.innerHTML += '<option value="Jaisalmer">Jaisalmer</option>';
        districtSelect.innerHTML += '<option value="Jalore">Jalore</option>';
        districtSelect.innerHTML += '<option value="Jhalawar">Jhalawar</option>';
        districtSelect.innerHTML += '<option value="Jhunjhunu">Jhunjhunu</option>';
        districtSelect.innerHTML += '<option value="Jodhpur">Jodhpur</option>';
        districtSelect.innerHTML += '<option value="Karauli">Karauli</option>';
        districtSelect.innerHTML += '<option value="Kota">Kota</option>';
        districtSelect.innerHTML += '<option value="Nagaur">Nagaur</option>';
        districtSelect.innerHTML += '<option value="Pali">Pali</option>';
        districtSelect.innerHTML += '<option value="Pratapgarh">Pratapgarh</option>';
        districtSelect.innerHTML += '<option value="Rajsamand">Rajsamand</option>';
        districtSelect.innerHTML += '<option value="Sawai Madhopur">Sawai Madhopur</option>';
        districtSelect.innerHTML += '<option value="Sikar">Sikar</option>';
        districtSelect.innerHTML += '<option value="Sirohi">Sirohi</option>';
        districtSelect.innerHTML += '<option value="Sri Ganganagar">Sri Ganganagar</option>';
        districtSelect.innerHTML += '<option value="Tonk">Tonk</option>';
        districtSelect.innerHTML += '<option value="Udaipur">Udaipur</option>';
        // Add more districts of Rajasthan as needed
    } else if (selectedState === "Sikkim") {
        districtSelect.innerHTML += '<option value="East Sikkim">East Sikkim</option>';
        districtSelect.innerHTML += '<option value="North Sikkim">North Sikkim</option>';
        districtSelect.innerHTML += '<option value="South Sikkim">South Sikkim</option>';
        districtSelect.innerHTML += '<option value="West Sikkim">West Sikkim</option>';
        // Add more districts of Sikkim as needed
    } else if (selectedState === "Tamil Nadu") {
        districtSelect.innerHTML += '<option value="Ariyalur">Ariyalur</option>';
        districtSelect.innerHTML += '<option value="Chengalpattu">Chengalpattu</option>';
        districtSelect.innerHTML += '<option value="Chennai">Chennai</option>';
        districtSelect.innerHTML += '<option value="Coimbatore">Coimbatore</option>';
        districtSelect.innerHTML += '<option value="Cuddalore">Cuddalore</option>';
        districtSelect.innerHTML += '<option value="Dharmapuri">Dharmapuri</option>';
        districtSelect.innerHTML += '<option value="Dindigul">Dindigul</option>';
        districtSelect.innerHTML += '<option value="Erode">Erode</option>';
        districtSelect.innerHTML += '<option value="Kallakurichi">Kallakurichi</option>';
        districtSelect.innerHTML += '<option value="Kanchipuram">Kanchipuram</option>';
        districtSelect.innerHTML += '<option value="Kanyakumari">Kanyakumari</option>';
        districtSelect.innerHTML += '<option value="Karur">Karur</option>';
        districtSelect.innerHTML += '<option value="Krishnagiri">Krishnagiri</option>';
        districtSelect.innerHTML += '<option value="Madurai">Madurai</option>';
        districtSelect.innerHTML += '<option value="Nagapattinam">Nagapattinam</option>';
        districtSelect.innerHTML += '<option value="Namakkal">Namakkal</option>';
        districtSelect.innerHTML += '<option value="Nilgiris">Nilgiris</option>';
        districtSelect.innerHTML += '<option value="Perambalur">Perambalur</option>';
        districtSelect.innerHTML += '<option value="Pudukkottai">Pudukkottai</option>';
        districtSelect.innerHTML += '<option value="Ramanathapuram">Ramanathapuram</option>';
        districtSelect.innerHTML += '<option value="Ranipet">Ranipet</option>';
        districtSelect.innerHTML += '<option value="Salem">Salem</option>';
        districtSelect.innerHTML += '<option value="Sivaganga">Sivaganga</option>';
        districtSelect.innerHTML += '<option value="Tenkasi">Tenkasi</option>';
        districtSelect.innerHTML += '<option value="Thanjavur">Thanjavur</option>';
        districtSelect.innerHTML += '<option value="Theni">Theni</option>';
        districtSelect.innerHTML += '<option value="Thoothukudi">Thoothukudi</option>';
        districtSelect.innerHTML += '<option value="Tiruchirappalli">Tiruchirappalli</option>';
        districtSelect.innerHTML += '<option value="Tirunelveli">Tirunelveli</option>';
        districtSelect.innerHTML += '<option value="Tirupathur">Tirupathur</option>';
        districtSelect.innerHTML += '<option value="Tiruppur">Tiruppur</option>';
        districtSelect.innerHTML += '<option value="Tiruvallur">Tiruvallur</option>';
        districtSelect.innerHTML += '<option value="Tiruvannamalai">Tiruvannamalai</option>';
        districtSelect.innerHTML += '<option value="Tiruvarur">Tiruvarur</option>';
        districtSelect.innerHTML += '<option value="Vellore">Vellore</option>';
        districtSelect.innerHTML += '<option value="Viluppuram">Viluppuram</option>';
        districtSelect.innerHTML += '<option value="Virudhunagar">Virudhunagar</option>';
        // Add more districts of Tamil Nadu as needed
    }

    // Continue adding more states and their districts as required
    else if (selectedState === "Telangana") {
        districtSelect.innerHTML += '<option value="Adilabad">Adilabad</option>';
        districtSelect.innerHTML += '<option value="Bhadradri Kothagudem">Bhadradri Kothagudem</option>';
        districtSelect.innerHTML += '<option value="Hyderabad">Hyderabad</option>';
        districtSelect.innerHTML += '<option value="Jagtial">Jagtial</option>';
        districtSelect.innerHTML += '<option value="Jangaon">Jangaon</option>';
        districtSelect.innerHTML += '<option value="Jayashankar Bhupalpally">Jayashankar Bhupalpally</option>';
        districtSelect.innerHTML += '<option value="Jogulamba Gadwal">Jogulamba Gadwal</option>';
        districtSelect.innerHTML += '<option value="Kamareddy">Kamareddy</option>';
        districtSelect.innerHTML += '<option value="Karimnagar">Karimnagar</option>';
        districtSelect.innerHTML += '<option value="Khammam">Khammam</option>';
        districtSelect.innerHTML += '<option value="Komaram Bheem Asifabad">Komaram Bheem Asifabad</option>';
        districtSelect.innerHTML += '<option value="Mahabubabad">Mahabubabad</option>';
        districtSelect.innerHTML += '<option value="Mahabubnagar">Mahabubnagar</option>';
        districtSelect.innerHTML += '<option value="Mancherial">Mancherial</option>';
        districtSelect.innerHTML += '<option value="Medak">Medak</option>';
        districtSelect.innerHTML += '<option value="Medchal-Malkajgiri">Medchal-Malkajgiri</option>';
        districtSelect.innerHTML += '<option value="Nagarkurnool">Nagarkurnool</option>';
        districtSelect.innerHTML += '<option value="Nalgonda">Nalgonda</option>';
        districtSelect.innerHTML += '<option value="Nirmal">Nirmal</option>';
        districtSelect.innerHTML += '<option value="Nizamabad">Nizamabad</option>';
        districtSelect.innerHTML += '<option value="Peddapalli">Peddapalli</option>';
        districtSelect.innerHTML += '<option value="Rajanna Sircilla">Rajanna Sircilla</option>';
        districtSelect.innerHTML += '<option value="Rangareddy">Rangareddy</option>';
        districtSelect.innerHTML += '<option value="Sangareddy">Sangareddy</option>';
        districtSelect.innerHTML += '<option value="Siddipet">Siddipet</option>';
        districtSelect.innerHTML += '<option value="Suryapet">Suryapet</option>';
        districtSelect.innerHTML += '<option value="Vikarabad">Vikarabad</option>';
        districtSelect.innerHTML += '<option value="Wanaparthy">Wanaparthy</option>';
        districtSelect.innerHTML += '<option value="Warangal Rural">Warangal Rural</option>';
        districtSelect.innerHTML += '<option value="Warangal Urban">Warangal Urban</option>';
        districtSelect.innerHTML += '<option value="Yadadri Bhuvanagiri">Yadadri Bhuvanagiri</option>';
        // Add more districts of Telangana as needed
    } else if (selectedState === "Tripura") {
        districtSelect.innerHTML += '<option value="Dhalai">Dhalai</option>';
        districtSelect.innerHTML += '<option value="Gomati">Gomati</option>';
        districtSelect.innerHTML += '<option value="Khowai">Khowai</option>';
        districtSelect.innerHTML += '<option value="North Tripura">North Tripura</option>';
        districtSelect.innerHTML += '<option value="Sepahijala">Sepahijala</option>';
        districtSelect.innerHTML += '<option value="South Tripura">South Tripura</option>';
        districtSelect.innerHTML += '<option value="Unakoti">Unakoti</option>';
        districtSelect.innerHTML += '<option value="West Tripura">West Tripura</option>';
        // Add more districts of Tripura as needed
    } else if (selectedState === "Uttar Pradesh") {
        districtSelect.innerHTML += '<option value="Agra">Agra</option>';
        districtSelect.innerHTML += '<option value="Aligarh">Aligarh</option>';
        districtSelect.innerHTML += '<option value="Allahabad">Allahabad</option>';
        districtSelect.innerHTML += '<option value="Ambedkar Nagar">Ambedkar Nagar</option>';
        districtSelect.innerHTML += '<option value="Amethi">Amethi</option>';
        districtSelect.innerHTML += '<option value="Amroha">Amroha</option>';
        districtSelect.innerHTML += '<option value="Auraiya">Auraiya</option>';
        districtSelect.innerHTML += '<option value="Azamgarh">Azamgarh</option>';
        districtSelect.innerHTML += '<option value="Baghpat">Baghpat</option>';
        districtSelect.innerHTML += '<option value="Bahraich">Bahraich</option>';
        districtSelect.innerHTML += '<option value="Ballia">Ballia</option>';
        districtSelect.innerHTML += '<option value="Balrampur">Balrampur</option>';
        districtSelect.innerHTML += '<option value="Banda">Banda</option>';
        districtSelect.innerHTML += '<option value="Barabanki">Barabanki</option>';
        districtSelect.innerHTML += '<option value="Bareilly">Bareilly</option>';
        districtSelect.innerHTML += '<option value="Basti">Basti</option>';
        districtSelect.innerHTML += '<option value="Bhadohi">Bhadohi</option>';
        districtSelect.innerHTML += '<option value="Bijnor">Bijnor</option>';
        districtSelect.innerHTML += '<option value="Budaun">Budaun</option>';
        districtSelect.innerHTML += '<option value="Bulandshahr">Bulandshahr</option>';
        districtSelect.innerHTML += '<option value="Chandauli">Chandauli</option>';
        districtSelect.innerHTML += '<option value="Chitrakoot">Chitrakoot</option>';
        districtSelect.innerHTML += '<option value="Deoria">Deoria</option>';
        districtSelect.innerHTML += '<option value="Etah">Etah</option>';
        districtSelect.innerHTML += '<option value="Etawah">Etawah</option>';
        districtSelect.innerHTML += '<option value="Farrukhabad">Farrukhabad</option>';
        districtSelect.innerHTML += '<option value="Fatehpur">Fatehpur</option>';
        districtSelect.innerHTML += '<option value="Firozabad">Firozabad</option>';
        districtSelect.innerHTML += '<option value="Gautam Buddh Nagar">Gautam Buddh Nagar</option>';
        districtSelect.innerHTML += '<option value="Ghaziabad">Ghaziabad</option>';
        districtSelect.innerHTML += '<option value="Ghazipur">Ghazipur</option>';
        districtSelect.innerHTML += '<option value="Gonda">Gonda</option>';
        districtSelect.innerHTML += '<option value="Gorakhpur">Gorakhpur</option>';
        districtSelect.innerHTML += '<option value="Hamirpur">Hamirpur</option>';
        districtSelect.innerHTML += '<option value="Hapur">Hapur</option>';
        districtSelect.innerHTML += '<option value="Hardoi">Hardoi</option>';
        districtSelect.innerHTML += '<option value="Hathras">Hathras</option>';
        districtSelect.innerHTML += '<option value="Jalaun">Jalaun</option>';
        districtSelect.innerHTML += '<option value="Jaunpur">Jaunpur</option>';
        districtSelect.innerHTML += '<option value="Jhansi">Jhansi</option>';
        districtSelect.innerHTML += '<option value="Kannauj">Kannauj</option>';
        districtSelect.innerHTML += '<option value="Kanpur Dehat">Kanpur Dehat</option>';
        districtSelect.innerHTML += '<option value="Kanpur Nagar">Kanpur Nagar</option>';
        districtSelect.innerHTML += '<option value="Kasganj">Kasganj</option>';
        districtSelect.innerHTML += '<option value="Kaushambi">Kaushambi</option>';
        districtSelect.innerHTML += '<option value="Kushinagar">Kushinagar</option>';
        districtSelect.innerHTML += '<option value="Lakhimpur Kheri">Lakhimpur Kheri</option>';
        districtSelect.innerHTML += '<option value="Lalitpur">Lalitpur</option>';
        districtSelect.innerHTML += '<option value="Lucknow">Lucknow</option>';
        districtSelect.innerHTML += '<option value="Maharajganj">Maharajganj</option>';
        districtSelect.innerHTML += '<option value="Mahoba">Mahoba</option>';
        districtSelect.innerHTML += '<option value="Mainpuri">Mainpuri</option>';
        districtSelect.innerHTML += '<option value="Mathura">Mathura</option>';
        districtSelect.innerHTML += '<option value="Mau">Mau</option>';
        districtSelect.innerHTML += '<option value="Meerut">Meerut</option>';
        districtSelect.innerHTML += '<option value="Mirzapur">Mirzapur</option>';
        districtSelect.innerHTML += '<option value="Moradabad">Moradabad</option>';
        districtSelect.innerHTML += '<option value="Muzaffarnagar">Muzaffarnagar</option>';
        districtSelect.innerHTML += '<option value="Pilibhit">Pilibhit</option>';
        districtSelect.innerHTML += '<option value="Pratapgarh">Pratapgarh</option>';
        districtSelect.innerHTML += '<option value="Prayagraj">Prayagraj</option>';
        districtSelect.innerHTML += '<option value="Raebareli">Raebareli</option>';
        districtSelect.innerHTML += '<option value="Rampur">Rampur</option>';
        districtSelect.innerHTML += '<option value="Saharanpur">Saharanpur</option>';
        districtSelect.innerHTML += '<option value="Sambhal">Sambhal</option>';
        districtSelect.innerHTML += '<option value="Sant Kabir Nagar">Sant Kabir Nagar</option>';
        districtSelect.innerHTML += '<option value="Shahjahanpur">Shahjahanpur</option>';
        districtSelect.innerHTML += '<option value="Shamli">Shamli</option>';
        districtSelect.innerHTML += '<option value="Shrawasti">Shrawasti</option>';
        districtSelect.innerHTML += '<option value="Siddharthnagar">Siddharthnagar</option>';
        districtSelect.innerHTML += '<option value="Sitapur">Sitapur</option>';
        districtSelect.innerHTML += '<option value="Sonbhadra">Sonbhadra</option>';
        districtSelect.innerHTML += '<option value="Sultanpur">Sultanpur</option>';
        districtSelect.innerHTML += '<option value="Unnao">Unnao</option>';
        districtSelect.innerHTML += '<option value="Varanasi">Varanasi</option>';
        // Add more districts of Uttar Pradesh as needed
    }

    // Continue adding more states and their districts as required
    else if (selectedState === "Uttarakhand") {
        districtSelect.innerHTML += '<option value="Almora">Almora</option>';
        districtSelect.innerHTML += '<option value="Bageshwar">Bageshwar</option>';
        districtSelect.innerHTML += '<option value="Chamoli">Chamoli</option>';
        districtSelect.innerHTML += '<option value="Champawat">Champawat</option>';
        districtSelect.innerHTML += '<option value="Dehradun">Dehradun</option>';
        districtSelect.innerHTML += '<option value="Haridwar">Haridwar</option>';
        districtSelect.innerHTML += '<option value="Nainital">Nainital</option>';
        districtSelect.innerHTML += '<option value="Pauri Garhwal">Pauri Garhwal</option>';
        districtSelect.innerHTML += '<option value="Pithoragarh">Pithoragarh</option>';
        districtSelect.innerHTML += '<option value="Rudraprayag">Rudraprayag</option>';
        districtSelect.innerHTML += '<option value="Tehri Garhwal">Tehri Garhwal</option>';
        districtSelect.innerHTML += '<option value="Udham Singh Nagar">Udham Singh Nagar</option>';
        districtSelect.innerHTML += '<option value="Uttarkashi">Uttarkashi</option>';
        // Add more districts of Uttarakhand as needed
    } else if (selectedState === "West Bengal") {
        districtSelect.innerHTML += '<option value="Alipurduar">Alipurduar</option>';
        districtSelect.innerHTML += '<option value="Bankura">Bankura</option>';
        districtSelect.innerHTML += '<option value="Birbhum">Birbhum</option>';
        districtSelect.innerHTML += '<option value="Cooch Behar">Cooch Behar</option>';
        districtSelect.innerHTML += '<option value="Dakshin Dinajpur">Dakshin Dinajpur</option>';
        districtSelect.innerHTML += '<option value="Darjeeling">Darjeeling</option>';
        districtSelect.innerHTML += '<option value="Hooghly">Hooghly</option>';
        districtSelect.innerHTML += '<option value="Howrah">Howrah</option>';
        districtSelect.innerHTML += '<option value="Jalpaiguri">Jalpaiguri</option>';
        districtSelect.innerHTML += '<option value="Jhargram">Jhargram</option>';
        districtSelect.innerHTML += '<option value="Kalimpong">Kalimpong</option>';
        districtSelect.innerHTML += '<option value="Kolkata">Kolkata</option>';
        districtSelect.innerHTML += '<option value="Malda">Malda</option>';
        districtSelect.innerHTML += '<option value="Murshidabad">Murshidabad</option>';
        districtSelect.innerHTML += '<option value="Nadia">Nadia</option>';
        districtSelect.innerHTML += '<option value="North 24 Parganas">North 24 Parganas</option>';
        districtSelect.innerHTML += '<option value="Paschim Bardhaman">Paschim Bardhaman</option>';
        districtSelect.innerHTML += '<option value="Paschim Medinipur">Paschim Medinipur</option>';
        districtSelect.innerHTML += '<option value="Purba Bardhaman">Purba Bardhaman</option>';
        districtSelect.innerHTML += '<option value="Purba Medinipur">Purba Medinipur</option>';
        districtSelect.innerHTML += '<option value="Purulia">Purulia</option>';
        districtSelect.innerHTML += '<option value="South 24 Parganas">South 24 Parganas</option>';
        districtSelect.innerHTML += '<option value="Uttar Dinajpur">Uttar Dinajpur</option>';
        // Add more districts of West Bengal as needed
    } else {
        districtSelect.innerHTML = '<option value="">Select District</option>';
    }
}