var divisionClass = 1000;
var classNames = ["", "thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","undecillion"];
var numberSize = classNames.length;



function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

class BigNumber
{
	constructor()
	{
		this.m_numbers = new Array(numberSize);
		for(var i=0;i<this.m_numbers.length;++i)
		{
			this.m_numbers[i] = 0;
		}
	}
	normaliseDecimals()
	{
		var decimal;
		this.m_numbers[0] = parseInt(this.m_numbers[0]);
		for(var i=1;i<this.m_numbers.length;++i)
		{
			decimal = this.m_numbers[i] - parseInt(this.m_numbers[i]);
			if(decimal> 0)
			{
				this.m_numbers[i-1] += decimal * divisionClass;
				this.m_numbers[i] = parseInt(this.m_numbers[i]);
			}
		}
	}
	normalise()
	{
		this.normaliseDecimals();
		for(var i=0;i<this.m_numbers.length;++i)
		{
			if(this.m_numbers[i] >= divisionClass)
			{
				this.m_numbers[i+1] += parseInt(this.m_numbers[i] / divisionClass);
				this.m_numbers[i] = this.m_numbers[i] % divisionClass;
			}
		}
	}
	highestClass()
	{
		for(var i = this.m_numbers.length-1;i>=0;--i)
		{
			if(this.m_numbers[i] != 0)
			{
				return i;
			}
		}
		return 0;
	}
	toString()
	{
		var output = "";
		var highest = this.highestClass();
		var comma = highest > 1 ? "." + zeroPad(this.m_numbers[highest-1],3) : "";
		output = ""+this.m_numbers[highest]+comma+" "+classNames[highest];
		return output;
		
	}
	copy(){
		var result = new BigNumber();
		for(var i=0;i<this.m_numbers.length-1;++i)
		{
			result.m_numbers[i] = this.m_numbers[i];
		}
		return result;
	}
	toStringE()
	{
		var highest = this.highestClass();
		var output = this.m_numbers[highest];
		for(var i=highest-1;i>0;--i)
		{
			output+= "," + zeroPad(this.m_numbers[i],3)
		}
		if(highest!=0)
			output+= "," + zeroPad(this.m_numbers[0],3);
		return output;
	}
	multiply(scalar)
	{
		for(var i=0;i<this.m_numbers.length;++i)
		{
			this.m_numbers[i]*=scalar;
		}
		this.normalise();
	}
}

function bigNumberAdd(number1, number2)
{
	var result = new BigNumber();
	for(var i=0;i<number1.m_numbers.length;++i)
	{
		result.m_numbers[i] = number1.m_numbers[i]+number2.m_numbers[i];
	}
	result.normalise();
	log("===\n"+number1.toStringE()+" + \n"+number2.toStringE()+" = \n"+result.toStringE()+"\n===");
	return result;
}

function bigNumberSubtract(number1Orig, number2)
{
	var result = new BigNumber();
	var number1 = number1Orig.copy();
	for(var i=0;i<number1.m_numbers.length;++i)
	{
		result.m_numbers[i] = number1.m_numbers[i] - number2.m_numbers[i];
		if(result.m_numbers[i] < 0)
		{
			result.m_numbers[i] += divisionClass;
			if(i+1<number1.m_numbers.length)
			{
				number1.m_numbers[i+1] +=-1;
			}
		}
	}
	result.normalise();
	log("===\n"+number1Orig.toStringE()+" - \n"+number2.toStringE()+" = \n"+result.toStringE()+"\n===");
	return result;
}

