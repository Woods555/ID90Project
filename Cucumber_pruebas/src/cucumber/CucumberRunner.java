package cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"Modules/Login"},
				//features ="src/test/features", //se ejecutan todos los .feature
		//la ruta de nuestros TC, aca el creo un archivo en el video 2, fijate
		//format = {"pretty","html:target/Destination"},
		glue = "",
		plugin = {"html:target/cucumber-html-report"}
		//tags = {"@tagid90-Home","~@tagid90-Login"}
		//cada caso de prueba tendra una tag al cual nosotros podemos pedir que se ejecute del archivo de features
		)

public class CucumberRunner {

	
	
}
