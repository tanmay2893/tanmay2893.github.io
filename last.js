var parse=function(s){
	var counter=0;
	var boolean=0;
	var p=(s.split(")").length - 1);
	var logics=[];
	var l=s.length;
	var g;
	for (var i=0;i<l;i++){
		g=s[i];
		if (g==='('){
			counter+=1;
		}
		else if (g===')'){
			counter-=1;
		}
		if (g==='&' || g==='|' || g==='!'){
			boolean+=1;
			logics.push(g);
		}
		if (counter===0 && (g === '|' || g==='&')){
			return ([[(s.substring(0,i)).replace(/ /g,''),s[i].replace(/ /g,''),(s.substring(i+1,s.length)).replace(/ /g,'')],boolean]);
		}
	}
	var k=s.split('(').join(' ');
	k=k.split(')').join(' ');
	k=k.replace(/ /g,'');
	for (i=0;i<logics.length;i++){
		if (logics[i]!=='!'){
			k=k.split(logics[i]);
			var temp=[k[0]].concat([logics[i]]);
			k=temp.concat([k[1]]);
		}
	}
	if (p===0)
		return ([k,-1]);
	return ([k,0]);
}
$(function(){ // on dom ready
var a='( hh_external & ( ( ( CI_protein  ) )  )    ) | ( ( CI_protein  ) & ! ( PTC_protein  ) ) ';
var x=parse(a);
var letters=['a','b','c','d','e','f','g'];
var nodes=[];
var edges=[];
var node=[];
var target='ci';
var c,d;;
var l1,l2;
var link;
var image;
node.push({'data':{'id':target,'faveColor':'#000000','b':0}});
console.log(x);
while (x[1]>=0){
	if (typeof(x[0])=='string'){
		if (node.indexOf(x[0])===-1){
			if (x[0][0]!='!'){
				node.push({'data':{'id':x[0],'faveColor':'#000000','b':0}});
				edges.push({'data':{'source':x[0],'target':target}});
			}
			else{
				c=letters.pop();
				node.push({'data':{'id':c,'faveColor':'#000000','b':'not-image.jpg'}});
				node.push({'data':{'id':x[0].substring(1,x[0].length),'faveColor':'#000000','b':0}});
				edges.push({'data':{'source':x[0].substring(1,x[0].length),'target':c}});
				edges.push({'data':{'source':c,'target':target}});
			}
			try{
				v=nodes.pop();
				x=parse(v[1]);
				target=v[0];
			}
			catch(err){
				break;
			}
		}
	}
	else{
		if (x[1]===0){
			l1=x[0][0];
			l2=x[0][2];
			link=x[0][1];
			if (link==='&'){
				image='and.png';
			}
			else if(link==='|'){
				image='or.jpg';
			}
			c=letters.pop();
			if (l1[0]!=='!'){
				node.push({'data':{'id':l1,'faveColor':'#000000','b':0}});
				node.push({'data':{'id':c,'faveColor':'#000000','b':image}});
				edges.push({'data':{'source':l1,'target':c}});
				edges.push({'data':{'source':c,'target':target}});
			}
			if (l2[0]!=='!'){
				node.push({'data':{'id':l2,'faveColor':'#000000','b':0}});
				node.push({'data':{'id':c,'faveColor':'#000000','b':image}});
				edges.push({'data':{'source':l2,'target':c}});
				edges.push({'data':{'source':c,'target':target}});
			}
			if (l1[0]==='!'){
				d=letters.pop();
				node.push({'data':{'id':c,'faveColor':'#000000','b':image}});
				node.push({'data':{'id':d,'faveColor':'#000000','b':'not-image.png'}});
				node.push({'data':{'id':l1.substring(1,l1.length),'faveColor':'#000000','b':0}});
				edges.push({'data':{'source':l1.substring(1,l1.length),'target':d}});
				edges.push({'data':{'source':d,'target':c}});
				edges.push({'data':{'source':c,'target':target}});
			}
			if (l2[0]==='!'){
				d=letters.pop();
				node.push({'data':{'id':c,'faveColor':'#000000','b':image}});
				node.push({'data':{'id':d,'faveColor':'#000000','b':'not-image.jpg'}});
				node.push({'data':{'id':l2.substring(1,l2.length),'faveColor':'#000000','b':0}});
				edges.push({'data':{'source':l2.substring(1,l2.length),'target':d}});
				edges.push({'data':{'source':d,'target':c}});
				edges.push({'data':{'source':c,'target':target}});
			}
			}
			

		else{
		console.log('tanmay');
		console.log(x);
			l1=letters.pop();
			l2=letters.pop();
			nodes.push([l1,x[0][0]]);
			nodes.push([l2,x[0][2]]);
			if (x[0][1]==='&'){
				image='and.png';
			}
			else if(x[0][1]==='|'){
				image='or.jpg';
			}
			c=letters.pop();
			node.push({'data':{'id':l1,'faveColor':'#000000','b':0}});
			node.push({'data':{'id':l2,'faveColor':'#000000','b':0}});
			node.push({'data':{'id':c,'faveColor':'#000000','b':image}});
			edges.push({'data':{'source':l1,'target':c}});
			edges.push({'data':{'source':l2,'target':c}});
			edges.push({'data':{'source':c,'target':target}});
		}
		try{
			v=nodes.pop();
			x=parse(v[1]);
			target=v[0];
		}
		catch(err){
			break;
		}
	}
}
console.log(node);
console.log(edges);
var cy = cytoscape({
  container: document.getElementById('cy'),
  
  style: cytoscape.stylesheet()
    .selector('node')
	
      .css({
	  'height': 40,
        'width': 40,
        'background-fit': 'cover',
        'border-color': '#000',
        'border-width': 3,
        'border-opacity': 0.5,
        'content': 'data(id)',
		'background-image':'data(b)',
		'background-color':'data(faveColor)'
      })
    .selector('edge')
      .css({
        'target-arrow-shape': 'triangle',
        'line-color': '#000000',
        'target-arrow-color': '#000000'
      }),
  
  elements: {
      nodes: node, 
      
      edges: edges
    },
  
  layout: {
    name: 'breadthfirst',
    directed: true,
    padding: 10
  }
});



}); // on dom ready