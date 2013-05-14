package com.prospring3.restful_project;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.prospring3.restful_project.domain.Contact;

@Controller
//@RequestMapping("/members")
public class ContactController {

	@RequestMapping("/members/{id}")
	public String getMembers(@PathVariable("id") Long id, Model model){
		
		Contact member =null;
		if(id==1){
			member = new Contact("Bruce Lee", "8974581", "BDaddy@yahoo.com");
		} else if(id==2){
			member = new Contact("Jacky Chan", "0852441741", "jc@yahoo.com");
		} else if(id==3){
			member = new Contact("Irina Sheyk", "18005007", "hotStuff@yahoo.com");	
		}else{
			member = new Contact("No known member", "***", "***");
		}
		
		
		model.addAttribute("member", member);		
		
		System.out.println("*** Exiting getMembers with id parameter "+id+" ***");
		
		
		return "membertemplate";
	}

}
